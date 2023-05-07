import "./App.css";
import NavBar from "./components/NavBar";
import Paintings from "./components/Paintings";
import Favourites from "./components/Favourites";
import Footer from "./components/Footer";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import HisLife from "./components/HisLife";
import Comments from "./components/Comments";

const App = () => {
  const [numFavs, setNumFavs] = useState(0);
  const [favs, setFavs] = useState([]);
  const [paintings] = useState([
    {
      id: 1,
      title: "The Starry Night, 1899",
      museum: "The Museum of Modern Art, New York",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      fav: 0,
    },
    {
      id: 2,
      title: "Cafe Terrace at Night, 1888",
      museum: "Kroller-Muller Museum, Otterlo",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg/816px-Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg",
      fav: 0,
    },
    {
      id: 3,
      title: "Irises, 1889",
      museum: "Getty Museum, Los Angeles",
      imageURL: "https://www.vincentvangogh.org/images/paintings/irises.jpg",
      fav: 0,
    },
    {
      id: 4,
      title: "The Night Cafe, 1888",
      museum: "Yale University Art Gallery,  New Haven",
      imageURL:
        "https://media.overstockart.com/optimized/cache/data/product_images/VG848-1000x1000.jpg",
      fav: 0,
    },
    {
      id: 5,
      title: "Almond Blossoms, 1890",
      museum: "Van Gogh Museum, Amsterdam",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/1200px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg",
      fav: 0,
    },
    {
      id: 6,
      title: "Sunflowers, 1889",
      museum: "Van Gogh Museum, Amsterdam",
      imageURL: "https://iiif.micr.io/TZCqF/full/1280,/0/default.jpg",
      fav: 0,
    },
    {
      id: 7,
      title: "Potato Eaters, 1890",
      museum: "Van Gogh Museum, Amsterdam",
      imageURL:
        "https://m.media-amazon.com/images/I/71nmwan7B0L._AC_SL1024_.jpg",
      fav: 0,
    },
    {
      id: 8,
      title: "Wheat Field with Cypresses, 1889",
      museum: "The Metropolitan Museum of Art, New York",
      imageURL:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/wheat-field-with-cypresses-1-by-van-gogh-vincent-van-gogh.jpg",
      fav: 0,
    },
  ]);

  const refreshFavs = () => {
    let newFavs = paintings.filter((painting) => painting.fav > 0);
    setFavs(newFavs);
    console.log(favs);
  };

  function addToFavourites(id) {
    paintings.forEach((painting) => {
      if (painting.id === id) {
        if (painting.fav === 0) {
          painting.fav = 1;
          setNumFavs(numFavs + 1);
          alert(
            "Painting has been successfully added to your favourites list."
          );
          console.log("Painting is added to favouirites");
        } else {
          alert("Painting has already been added to your favourites list.");
        }
      }
      console.log("Number of favourites: " + numFavs);
    });
    refreshFavs();
  }

  function removeFromFavourites(id) {
    paintings.map((painting) => {
      if (painting.id === id) {
        if (painting.fav === 1) {
          painting.fav = 0;
          const a = numFavs - 1;
          setNumFavs(a);
          refreshFavs();
          alert(
            "Painting has been successfully removed from your favourites list."
          );
        }
      }
    });
  }

  return (
    <div className="App">
      <NavBar numFavs={numFavs} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Paintings
                paintings={paintings}
                addToFavourites={addToFavourites}
                // removeFromFavourites={removeFromFavourites}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites
              paintings={favs}
              numFavs={numFavs}
              removeFromFavourites={removeFromFavourites}
            />
          }
        />
        <Route path="/hislife" element={<HisLife />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </div>
  );
};

export default App;
