import React from "react";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

const OnePainting = ({
  painting,
  addToFavourites,
  removeFromFavourites,
  inFavs,
}) => {
  return (
    <div className={inFavs === 1 ? "card" : "card-favs"}>
      <img
        className={inFavs === 1 ? "card-img-top" : "card-img-fav"}
        src={[painting.imageURL]}
        alt="Neka slika"
      />
      <div className="card-body">
        <h3 className="card-title"> {painting.title}</h3>
        <p className="card-text"> {painting.museum}</p>

        {inFavs === 1 ? (
          <>
            <a className="btn" onClick={() => addToFavourites(painting.id)}>
              {painting.fav === 1 ? (
                <>
                  <MdOutlineFavorite size={"2rem"} />
                </>
              ) : (
                <>
                  <MdOutlineFavoriteBorder size={"2rem"} />
                </>
              )}
            </a>
          </>
        ) : (
          <div className="fav-icons">
            <a
              className="btn"
              onClick={() => removeFromFavourites(painting.id)}
            >
              <MdOutlineFavorite size={"2rem"} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnePainting;
