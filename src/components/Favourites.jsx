import React from "react";
import OnePainting from "./OnePainting";

const Favourites = ({ paintings, removeFromFavourites }) => {
  return (
    <>
      <div className="fav-container">
        {paintings.map((p) => (
          <OnePainting
            painting={p}
            key={p.id}
            inFavs={0}
            removeFromFavourites={removeFromFavourites}
          />
        ))}
      </div>
    </>
  );
};

export default Favourites;
