import React from "react";
import Footer from "./Footer";

const firtsPar = `Vincent van Gogh was born in the Brabant village of Zundert on 30 March 1853. 
  He was not the first child of the Protestant minister Theodorus van Gogh and Anna Carbentus: 
  another son (also named Vincent) had been stillborn on the same date, precisely one year earlier.
  At the age of eleven, Vincent transferred from the village school in Zundert to a boarding school in Zevenbergen. 
  He was deeply unhappy there, but managed to complete his elementary schooling. He drew from time to time, 
  but there was little sign as yet of any special artistic talent.
  When he was thirteen, Vincent went to secondary school in Tilburg, where he earned good marks, especially for languages. 
  All the same, he quit the school half way through his second academic year (1867–68) for unknown reasons. 
  Vincent never went back to school.`;
const secondPar = `Vincent’s uncle found the sixteen-year-old Van Gogh a job as a trainee at the international art dealer
 Goupil & Cie. He was taken on at the branch which ‘Uncle Cent’ (short for ‘Vincent’) had set up in The Hague. 
 Vincent’s earliest surviving letter dates from these first years at Goupil.
 September 1872 marked the beginning of a life-long correspondence between Vincent and his younger brother Theo, 
 who started work for Goupil in 1873, this time in Brussels. Vincent was transferred that same year to Goupil’s London branch.`;
const thirdPar = `Vincent's parents weren't very happy with his dream of an artist's life. 
Fortunately, that did not stop Vincent from working hard and improving his skills. 
He lived in various places in the Netherlands. In The Hague he took painting and drawing lessons with his uncle, 
the artist Anton Mauve. Yet love too provided inspiration. In the spring of 1881, Vincent moved back in with his parents, 
who were now living in Etten, also in Brabant. He practised drawing and frequently worked out of doors. In the meantime, 
his brother Theo had been appointed manager of Goupil & Cie in Paris. He supported Vincent financially so he could focus 
entirely on his art.
Vincents parents, by contrast, were extremely disappointed that their eldest son had chosen the life of an artist, 
which in their eyes was synonymous with social failure. It did not help that Vincent had fallen in love with his cousin, Kee Vos. 
Kee was a widow and wanted nothing to do with him, but Van Gogh persisted. This did not go down well with his family and, 
following a row with his father, Vincent walked out of his parents’ house on Christmas Day 1881. He found a new home in The Hague.`;

function HisLife() {
  return (
    <div>
      <div className="biography">
        <div>
          <p>{firtsPar}</p>
          <p>{secondPar}</p>
          <p>{thirdPar}</p>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1620px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default HisLife;
