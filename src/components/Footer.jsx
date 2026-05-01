import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="text-white text-center m-0">
              Made with ❤️ by{" "}
              <a href="#" className="text-white" style={{ textDecoration: "none" }}>
                 SSS
                  </a>
                  </p>
            <a className="text-dark fs-4" href="https://github.com/SSS-710" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
