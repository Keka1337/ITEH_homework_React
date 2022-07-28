import React from "react";
import OnePainting from "./OnePainting";

const Favourites = ({ paintings }) => {
  return (
    <>
      <h1>Your favourite paintings</h1>
      <div className="fav-container">
        {paintings.map((p) => (
          <OnePainting painting={p} key={p.id} inFavs={0} />
        ))}
      </div>
    </>
  );
};

export default Favourites;
