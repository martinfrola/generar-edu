import React from "react";

export default function RandomMsg() {
  return (
    <div className="random-msg bg-dark py-5">
      <div className="msg-content bg-secondary">
        <img
          src="https://thispersondoesnotexist.com/image"
          alt="name of the person how comented"
        />
        <div className="msg-text">
          <h4>Juan Sinnombre</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet
            error magni. Non repudiandae ut aliquam commodi, doloribus
            laudantium blanditiis nobis? Quos asperiores repudiandae itaque
            aliquam totam quasi animi necessitatibus.
          </p>
        </div>
      </div>
    </div>
  );
}
