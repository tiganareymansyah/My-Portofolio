import { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../../../components/Navbar/Navbar";

export default function Certificate(props) {
  console.log("Certificates", props);

  const [title, setTitle] = useState("Certificates");

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
