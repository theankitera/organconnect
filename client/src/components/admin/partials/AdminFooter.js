import React, { Fragment } from "react";
import moment from "moment";

const AdminFooter = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "#0f766e", color: "#ccfbf1" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        OrganConnect © Copyright {moment().format("YYYY")} · Developed by{" "}
        <a
          href="https://github.com/theankitera"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          theankitera
        </a>
      </footer>
    </Fragment>
  );
};

export default AdminFooter;
