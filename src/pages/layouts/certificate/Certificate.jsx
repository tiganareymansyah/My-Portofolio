import { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../../../components/Navbar/Navbar";
import Sertifikat_1 from "../../../assets/sertifikat_1.jpg";
import Sertifikat_2 from "../../../assets/sertifikat_2.jpg";
import Sertifikat_3 from "../../../assets/sertifikat_3.jpg";
import Sertifikat_10 from "../../../assets/sertifikat_10.jpg";
import Sertifikat_9 from "../../../assets/sertifikat_9.jpg";
import Sertifikat_8 from "../../../assets/sertifikat_8.jpg";
import Sertifikat_7 from "../../../assets/sertifikat_7.jpg";
import Sertifikat_6 from "../../../assets/sertifikat_6.jpg";
import Sertifikat_5 from "../../../assets/sertifikat_5.jpg";
import Sertifikat_4 from "../../../assets/sertifikat_4.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Certificate(props) {
  console.log("Certificates", props);

  const [title, setTitle] = useState("Certificates");

  return (
    <>
      <Navbar />

      <Box
        sx={{
          backgroundColor: "#FAEBD7",
        }}
      >
        <Box className="pb-16">
          <Box className="w-full flex gap-2 p-2">
            <Box className="w-full">
              <Zoom>
                <img src={Sertifikat_1} alt="" className="h-96" />
              </Zoom>
            </Box>
            <Box className="w-full">
              <Zoom>
                <img src={Sertifikat_2} alt="" className="h-96" />
              </Zoom>
            </Box>
            <Box className="w-full">
              <Zoom>
                <img src={Sertifikat_3} alt="" className="h-96" />
              </Zoom>
            </Box>
          </Box>

          <Box className="w-full flex gap-2 p-2">
            <Box className="w-full">
              <Zoom>
                <img src={Sertifikat_10} alt="" className="h-96" />
              </Zoom>
            </Box>
            <Box className="w-full">
              <Zoom></Zoom>
              <img src={Sertifikat_9} alt="" className="h-96" />
            </Box>
            <Box className="w-full">
              <Zoom>
                <img src={Sertifikat_8} alt="" className="h-96" />
              </Zoom>
            </Box>
          </Box>

          <Box className="w-full flex gap-2 p-2">
            <Box className="w-full">
              <Zoom>
                <img src={Sertifikat_7} alt="" className="h-96" />
              </Zoom>
            </Box>
            <Box className="w-full">
              <Zoom>
                <img src={Sertifikat_6} alt="" className="h-96" />
              </Zoom>
            </Box>
            <Box className="w-full">
              <Zoom>
                <img src={Sertifikat_5} alt="" className="h-96" />
              </Zoom>
            </Box>
          </Box>

          <Box className="w-full flex gap-2 p-2">
            <Box className="w-full">
              <Zoom>
                <img src={Sertifikat_4} alt="" className="h-96" />
              </Zoom>
            </Box>
            <Box className="w-full"></Box>
            <Box className="w-full"></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
