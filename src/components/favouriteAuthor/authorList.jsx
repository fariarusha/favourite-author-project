import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CustomLoaderEcomm from "../Loader/customLoader";
import { useNavigate } from "react-router-dom";
import * as api from "../../util";
import { getAllAuthors } from "../../util";
import ListItem from "../author/listItem";

const FavouriteAuthorList = () => {
  const [favouriteAuthors, setFavouriteAuthors] = useState([]);
  const [toggleButton, setToggleButton] = useState(false);
  const deleteAuthor = (index) => {
    const previousAuthor = [...favouriteAuthors];
    const getIndex = previousAuthor.indexOf(index);
    console.log(getIndex);
    if (getIndex !== -1) {
      previousAuthor.splice(getIndex, 1);
      setFavouriteAuthors(previousAuthor);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    setFavouriteAuthors(JSON.parse(localStorage.getItem("favAuthors")));
    localStorage.removeItem("favAuthors");
  }, []);

  return (
    <div className="container mt-5">
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        sx={{
          mx: "auto",
          textAlign: "center",
          fontSize: "35px",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        Favourite Authors List
      </Typography>

      {favouriteAuthors ? (
        <div>
          <Container sx={{ mx: "auto" }}>
            <Grid sx={{ mx: "auto" }} wrap="wrap" container rowSpacing={1}>
              <Grid
                sx={{ mx: "auto", justifyContent: "center" }}
                item
                mx-auto
                container
              >
                {favouriteAuthors &&
                  favouriteAuthors.map((author) => (
                    <ListItem author={author} onRemoveAuthor={deleteAuthor} />
                  ))}
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : (
        <div>
          {/* <CustomLoaderEcomm /> */}
          <Typography sx={{textAlign:'center'}} variant="subtitle1">
            <p>
              <b>No Favourite Author added</b>
            </p>
          </Typography>
        </div>
      )}
    </div>
  );
};

export default FavouriteAuthorList;
