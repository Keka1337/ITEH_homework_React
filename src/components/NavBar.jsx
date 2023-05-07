import React from "react";
import { Link } from "react-router-dom";

function NavBar({ numFavs }) {
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
        <Link to="/">Paintings</Link>
        <Link to="/favourites">Your favourites - {numFavs}</Link>
        <Link to="/hislife">His life</Link>
        <Link to="/comments">Comments</Link>
      </div>
    </div>
  );
}

export default NavBar;
