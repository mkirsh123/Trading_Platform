import React from "react";

function SignUp() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h1 className="card-title fs-3 mb-4">
                Sign Up to Access the Dashboard
              </h1>
              <a
                href="https://courageous-tanuki-f990a5.netlify.app/login"
                className="btn btn-primary btn-lg"
                style={{ textDecoration: "none" }}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
