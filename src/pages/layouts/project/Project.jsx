import { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../../../components/Navbar/Navbar";

export default function Project(props) {
  console.log("Projects", props);

  const [title, setTitle] = useState("Projects");

  return (
    <>
      <Navbar />

      <Box
        sx={{
          backgroundColor: "#FAEBD7",
          height: "613px",
        }}
      >
        {title}
      </Box>
    </>
  );
}
