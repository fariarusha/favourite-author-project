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

const ListItem = ({ author, onAddAuthor, onRemoveAuthor}) => {
  const[isFavourite, setIsFavourite]=useState(false);
  return (
    <>
      <Card sx={{ maxWidth: 300, margin:'20px', height: "auto" }}>
        <CardActionArea>
          <CardContent>
            <Typography sx={{ color: "info.main" }} variant="subtitle1">
              <p>
                <b>Name:{author.name}</b>
              </p>
            </Typography>
            <Typography variant="subtitle1">
              <p>
                <b>Bio:{author.bio}</b>
              </p>
            </Typography>

            <Typography sx={{ color: "info.main" }} variant="subtitle1">
              <p>
                <b>Link:{author.link}</b>
              </p>
            </Typography>

            <Typography sx={{ color: "info.main" }} variant="subtitle1">
              <p>
                <b>Description:{author.description}</b>
              </p>
            </Typography>
            {onRemoveAuthor ? (
               
              <Button
              mt={1}
              onClick={() => onRemoveAuthor(author)}
              variant="outlined"
            >
              Remove Favourite
            </Button>
            ) : (
            
              <Button
              mt={1}
              onClick={() => onAddAuthor(author)}
              variant="outlined"
            >
              Add to Favourite
            </Button>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ListItem;
