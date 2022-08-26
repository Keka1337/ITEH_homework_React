import React from "react";
import { useState } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function Footer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("firstName", firstName);
    console.log("lastName", lastName);

    setFirstName("");
    setLastName("");
  };

  return (
    <div className="footer">
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}></Grid>

          <Grid item xs={4}>
            <div className="footerNav">
              <h4 style={{ marginBottom: "5px", color: "white" }}>
                Bottom menu
              </h4>
              <Link to="/" style={{ padding: "5px" }}>
                PAINTINGS
              </Link>
              <Link to="/favourites" style={{ padding: "5px" }}>
                YOUR FAVOURITES
              </Link>
              <Link to="/hislife" style={{ padding: "5px" }}>
                HIS LIFE
              </Link>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Scroll to the top!
              </button>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div className="footerForm">
              <h3 style={{ marginBottom: "10px", color: "white" }}>
                Stay connected with us!
              </h3>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px 20px",
                }}
              >
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  onChange={(event) => setFirstName(event.target.value)}
                  value={firstName}
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    marginBottom: "5px",
                    borderRadius: "10px",
                    border: "black solid 2px",
                  }}
                />
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    marginBottom: "5px",
                    borderRadius: "10px",
                    border: "black solid 2px",
                  }}
                />
                <button type="submit">Submit form</button>
              </form>
            </div>
          </Grid>

          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
      <div className="bottomLine"></div>
    </div>
  );
}

export default Footer;
