import "./App.css";
import NavBar from "./components/NavBar";
import Paintings from "./components/Paintings";
import Favourites from "./components/Favourites";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [numFavs, setNumFavs] = useState([]);
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
        "https://www.libertypuzzles.com/userfiles/media/images/5281/wheat-field-and-cypresses-image-1600.jpg",
      fav: 0,
    },
  ]);

  const refreshFavs = () => {
    let newFavs = paintings.filter((painting) => painting.fav > 0);
    setFavs(newFavs);
    console.log(favs);
  };

  function addToFavourites(id) {
    console.log("Painting is added to favouirites");
    setNumFavs(numFavs + 1);
    // paintings.map((p) => {
    //   if (p.id === id) {
    //     if (p.fav === 0) {
    //       p.fav = p.fav + 1;
    //       console.log("product id = ", p.id, " added = ", p.fav);
    //     } else {
    //       alert("Painting has already been added to your favourites list.");
    //     }
    //   }
    // });
    paintings.forEach((painting) => {
      if (painting.id === id) {
        painting.fav = 1;
      }
      console.log(painting.fav);
    });
    refreshFavs();
  }

  function removeFromFavourites(id) {
    console.log("Painting is removed from favouirites. JEBI SE");
    setNumFavs(numFavs - 1);
    paintings.forEach((painting) => {
      if (painting.id === id) {
        painting.fav = 0;
      }
      console.log(painting.fav);
    });
    refreshFavs();
  }

  // return (
  //   <BrowserRouter className="App">
  //     <NavBar />
  //     <Routes>
  //       <Route
  //         path="/"
  //         element={
  //           <Paintings
  //             paintings={paintings}
  //             addToFavourites={addToFavourites}
  //           />
  //         }
  //       />
  //       <Route
  //         path="/favourites"
  //         element={<Favourites paintings={favs} numFavs={numFavs} />}
  //       />
  //     </Routes>
  //   </BrowserRouter>
  // );
  return (
    <div className="App">
      <NavBar />
      <Paintings
        paintings={paintings}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
      />
      <Favourites paintings={favs} numFavs={numFavs} />
    </div>
  );
}

export default App;
