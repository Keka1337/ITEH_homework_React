import React from "react";

function NavBar() {
  return (
    <div className="headNav">
      <h1>Vincent van Gogh</h1>
      <p>
        “I put my heart and soul into my work, and I have lost my mind in the
        process.”
      </p>
      <div className="navBar">
        {/* <a className="fav-paintings">
          <div className="fav-paintings-num">0</div>
        </a> */}
        <a href="/">Masterpieces</a>
        <a href="/favourites">Your favourites</a>
        <a href="/movies">His life</a>
      </div>
    </div>
  );
}

export default NavBar;
