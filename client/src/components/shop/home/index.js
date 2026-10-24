import React, { Fragment, createContext, useReducer, useEffect } from "react";
import Layout from "../layout";
import { homeState, homeReducer } from "./HomeContext";
import Hero3D from "./Hero3D";
import Marquee from "./Marquee";
import HowItWorks from "./HowItWorks";
import ProductCategory from "./ProductCategory";
import SingleProduct from "./SingleProduct";
import Features from "./Features";
import Impact from "./Impact";
import CTASection from "./CTASection";
import FAQ from "./FAQ";
import OrderSuccessMessage from "./OrderSuccessMessage";
import useReveal from "../../../utils/useReveal";

export const HomeContext = createContext();

const HomeComponent = () => {
  useReveal();

  return (
    <Fragment>
      <Hero3D />
      <Marquee />

      {/* Category, Search & Filter Section */}
      <section className="oc-section" style={{ paddingBottom: "2rem" }}>
        <div className="oc-reveal">
          <span className="oc-section-tag">Browse network</span>
          <h2 className="oc-section-title">
            Available organs, <em>live</em>
          </h2>
          <p className="oc-section-desc">
            Filter by category or search by compatibility. Every listing comes
            from a verified procurement centre on the OrganConnect network.
          </p>
        </div>
        <div className="oc-reveal" style={{ marginTop: "2rem" }}>
          <ProductCategory />
        </div>
      </section>

      {/* Product Section */}
      <section
        id="shop"
        className="oc-section grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={{ paddingTop: "1rem" }}
      >
        <SingleProduct />
      </section>

      <HowItWorks />
      <Features />
      <Impact />
      <CTASection />
      <FAQ />
      <OrderSuccessMessage />
    </Fragment>
  );
};

const Home = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Home;
