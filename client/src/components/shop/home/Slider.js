import React, { Fragment, useEffect, useContext, useState } from "react";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { HomeContext } from "./";
import { sliderImages } from "../../admin/dashboardAdmin/Action";
import { prevSlide, nextSlide } from "./Mixins";

const apiURL = process.env.REACT_APP_API_URL;

const HeroFallback = () => (
  <div
    className="relative overflow-hidden text-center text-white"
    style={{
      background:
        "linear-gradient(135deg, #0f766e 0%, #0d9488 45%, #047857 100%)",
    }}
  >
    <div className="py-16 md:py-28 px-6">
      <svg
        className="mx-auto w-20 h-20 md:w-24 md:h-24"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 49s-15-9-15-20a8.5 8.5 0 0115-5.3A8.5 8.5 0 0147 29c0 11-15 20-15 20z"
          fill="#ffffff"
          opacity="0.95"
        />
        <path
          d="M19 30h7.5l3-6.5 4.5 13 3-6.5H45"
          stroke="#0f766e"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <h1
        style={{ letterSpacing: "0.35rem" }}
        className="mt-6 text-3xl md:text-5xl font-bold uppercase"
      >
        OrganConnect
      </h1>
      <p
        style={{ letterSpacing: "0.2rem", opacity: 0.9 }}
        className="mt-4 text-sm md:text-lg uppercase"
      >
        Connecting Centers · Saving Lives
      </p>
      <p style={{ opacity: 0.85 }} className="mt-3 text-sm md:text-base">
        Making organ transfers seamless — request compatible organs in clicks,
        not calls.
      </p>
      <div className="mt-8 flex justify-center">
        <a
          href="#shop"
          className="bg-white text-teal-700 font-semibold uppercase tracking-wider text-sm px-8 py-3 rounded-lg shadow-lg hover:bg-teal-50 transition-colors"
        >
          View Organs
        </a>
      </div>
    </div>
  </div>
);

const Slider = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    sliderImages(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div className="relative mt-16 bg-gray-100 border-2 border-teal-600">
        {data.sliderImages.length > 0 ? (
          <img
            className="w-full"
            src={`${apiURL}/uploads/customize/${data.sliderImages[slide].slideImage}`}
            alt="sliderImage"
          />
        ) : (
          <HeroFallback />
        )}

        {data?.sliderImages?.length > 0 ? (
          <>
            <svg
              onClick={(e) =>
                prevSlide(data.sliderImages.length, slide, setSlide)
              }
              className={`z-10 absolute top-0 left-0 mt-64 flex justify-end items-center box-border flex justify-center w-12 h-12 text-gray-700  cursor-pointer hover:text-teal-600`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <svg
              onClick={(e) =>
                nextSlide(data.sliderImages.length, slide, setSlide)
              }
              className={`z-10 absolute top-0 right-0 mt-64 flex justify-start items-center box-border flex justify-center w-12 h-12 text-gray-700 cursor-pointer hover:text-teal-600`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="#shop"
                style={{ background: "#0d9488" }}
                className="cursor-pointer box-border text-2xl text-white px-4 py-2 rounded"
              >
                Organs
              </a>
            </div> */}
          </>
        ) : null}
      </div>
      <OrderSuccessMessage />
    </Fragment>
  );
};

export default Slider;
