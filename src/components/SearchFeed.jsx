import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Video } from "./";
import { fetchfromAPI } from "../utils/fetchAPI";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchfromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        pl={9}
        sx={{ color: "white" }}
        align={"justify"}
      >
        Search result for :{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm} </span>videos
      </Typography>

      <Video videos={videos} />
    </Box>
  );
};

export default SearchFeed;
