import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="headNav">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Vincent_Van_Gogh_Signature.svg/2560px-Vincent_Van_Gogh_Signature.svg.png"
        alt=""
      />
      <p>
        “I put my heart and soul into my work, and I have lost my mind in the
        process.”
      </p>
      <div className="navBar">
        {/* <a className="fav-paintings">
          <div className="fav-paintings-num">0</div>
        </a> */}
        <Link to="/">Paintings</Link>
        <Link to="/favourites">Your favourites</Link>
        <Link to="/movies">His life</Link>
      </div>
    </div>
  );
}

export default NavBar;
