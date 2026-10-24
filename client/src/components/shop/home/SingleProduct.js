import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { getAllProduct } from "../../admin/products/FetchApi";
import { HomeContext } from "./index";
import TiltCard from "../../three/TiltCard";

const apiURL = (process.env.REACT_APP_API_URL || "");

const SingleProduct = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const { products } = data;
  const history = useHistory();

  const [wList, setWlist] = useState(
    JSON.parse(localStorage.getItem("wishList"))
  );

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    dispatch({ type: "loading", payload: true });
    try {
      let responseData = await getAllProduct();
      setTimeout(() => {
        if (responseData && responseData.Products) {
          dispatch({ type: "setProducts", payload: responseData.Products });
          dispatch({ type: "loading", payload: false });
        }
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  if (data.loading) {
    return (
      <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24">
        <svg
          className="w-12 h-12 animate-spin text-teal-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <>
      {products && products.length > 0 ? (
        products.map((item, index) => {
          return (
            <div
              key={index}
              className={`col-span-1 m-2 oc-reveal oc-reveal-delay-${(index % 4) + 1}`}
            >
              <TiltCard maxTilt={9} className="oc-product-card">
                <div
                  onClick={(e) => history.push(`/products/${item._id}`)}
                  style={{ overflow: "hidden", borderRadius: "14px 14px 0 0" }}
                >
                  <img
                    className="w-full object-cover object-center"
                    style={{ height: 220 }}
                    src={`${apiURL}/uploads/products/${item.pImages[0]}`}
                    alt=""
                  />
                </div>
                <div className="oc-product-meta" style={{ padding: "1rem 1.1rem 1.2rem" }}>
                  <div className="flex items-center justify-between">
                    <div className="text-gray-700 font-semibold truncate">
                      {item.pName}
                    </div>
                    <span className="oc-chip">Verified</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-teal-700 font-bold">
                      PIN Code: {item.pPrice}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">
                      View details →
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          );
        })
      ) : (
        <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24 text-2xl">
          No Organ found
        </div>
      )}
    </>
  );
};

export default SingleProduct;
