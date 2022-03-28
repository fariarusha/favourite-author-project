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
import { getAllAuthors } from "../../util";
import ListItem from "./listItem";
import * as api from "../../util";
import PaginationControls from "../pagination/pagination";

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const [pageInfo, setPageInfo] = useState({});
  const navigate = useNavigate();


  const updateAuthors = async (page = 1, resultsPerPage = 5) => {
    const { results, ...pageInfo } = await api.authors({
      page,
      resultsPerPage,
    });
    setAuthors(results);
    setPageInfo(pageInfo);
  };
  const handleAddAuthor = (authorValue) => {
    console.log(authorValue);
    const prevData = JSON.parse(localStorage.getItem("favAuthors"))
      ? JSON.parse(localStorage.getItem("favAuthors"))
      : [];
    prevData.push(authorValue);

    localStorage.setItem("favAuthors", JSON.stringify(prevData));
  };
 
  useEffect(() => {
    if (page) updateAuthors(page, resultsPerPage);
  }, [page, resultsPerPage]);
  useEffect(async () => {
    const response = await getAllAuthors();
    console.log(response);
    setAuthors(response);
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
        Authors List
      </Typography>

      {authors ? (
        <div>
          <Container sx={{ mx: "auto" }}>
            <PaginationControls
              {...pageInfo}
              page={page}
              limit={resultsPerPage}
              setPage={setPage}
              setResultsPerPage={setResultsPerPage}
            />
            <Grid sx={{ mx: "auto" }} wrap="wrap" container rowSpacing={1}>
              <Grid
                sx={{ mx: "auto", justifyContent: "center" }}
                item
                mx-auto
                container
              >
                {authors.map((author) => (
                  <ListItem author={author} onAddAuthor={handleAddAuthor}  />
                ))}
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : (
        <CustomLoaderEcomm />
      )}
    </div>
  );
};

export default AuthorList;
