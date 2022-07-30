import React from "react";
import OnePainting from "./OnePainting.jsx";

const Paintings = ({ paintings, addToFavourites }) => {
  return (
    <div className="all-paintings">
      {paintings.map((p) => (
        <OnePainting
          painting={p}
          key={p.id}
          addToFavourites={addToFavourites}
          inFavs={1}
        />
      ))}
    </div>
  );
};

export default Paintings;
