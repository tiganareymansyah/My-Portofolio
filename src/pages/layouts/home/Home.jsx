import { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { Box, Tooltip } from "@mui/material";
import Profile from "../../../assets/trs.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const handleLinkClick = (website) => {
    if (website === "facebook") {
      window.open(
        "https://www.facebook.com/profile.php?id=100004670087242",
        "_blank"
      );
    } else if (website === "instagram") {
      window.open(
        "https://www.instagram.com/tigana_reymansyah/?hl=id",
        "_blank"
      );
    } else if (website === "linkedin") {
      window.open(
        "https://www.linkedin.com/in/tigana-reymansyah-3b1055278/",
        "_blank"
      );
    } else if (website === "github") {
      window.open("https://github.com/tiganareymansyah", "_blank");
    }
  };

  return (
    <>
      <Navbar />

      <Box
        sx={{
          backgroundColor: "#FAEBD7",
          height: "613px",
        }}
      >
        <Box className="flex justify-evenly items-center pt-52">
          <Box className="flex flex-col gap-3">
            <p className="text-2xl">WELCOME!</p>
            <p className="text-sm">Hi, My name is Tigana Reymansyah</p>
            <p className="text-4xl">I Am FullStack Developer</p>
            <Box>
              <p className="text-sm">
                I'm a FullStack Developer with extensive experience for ever 2
                years. My expertise is
              </p>
              <p className="text-sm">
                to create and websites design, Rest API and many more...
              </p>
            </Box>
            <Box className="flex gap-2">
              <Tooltip
                title="Facebook"
                placement="top"
                arrow
                className="cursor-pointer"
                onClick={() => handleLinkClick("facebook")}
              >
                <Box
                  className="flex justify-center items-center w-8 h-8 rounded-full"
                  sx={{
                    border: "1px solid #8F503F",
                    backgroundColor: "#8F503F",
                  }}
                >
                  <FaFacebookF color="#FAEBD7" />
                </Box>
              </Tooltip>
              <Tooltip
                title="Instagram"
                placement="top"
                arrow
                className="cursor-pointer"
                onClick={() => handleLinkClick("instagram")}
              >
                <Box
                  className="flex justify-center items-center w-8 h-8 rounded-full"
                  sx={{
                    border: "1px solid #8F503F",
                    backgroundColor: "#8F503F",
                  }}
                >
                  <FaInstagram color="#FAEBD7" />
                </Box>
              </Tooltip>
              <Tooltip
                title="LinkedIn"
                placement="top"
                arrow
                className="cursor-pointer"
                onClick={() => handleLinkClick("linkedin")}
              >
                <Box
                  className="flex justify-center items-center w-8 h-8 rounded-full"
                  sx={{
                    border: "1px solid #8F503F",
                    backgroundColor: "#8F503F",
                  }}
                >
                  <FaLinkedinIn color="#FAEBD7" />
                </Box>
              </Tooltip>
              <Tooltip
                title="Github"
                placement="top"
                arrow
                className="cursor-pointer"
                onClick={() => handleLinkClick("github")}
              >
                <Box
                  className="flex justify-center items-center w-8 h-8 rounded-full"
                  sx={{
                    border: "1px solid #8F503F",
                    backgroundColor: "#8F503F",
                  }}
                >
                  <FaGithub color="#FAEBD7" />
                </Box>
              </Tooltip>
            </Box>
          </Box>

          <Box className="relative w-90 h-50">
            <Box
              sx={{ backgroundColor: "#8F503F" }}
              className="w-90 h-50 rounded-t-full absolute top-0 left-0"
            />

            <img
              src={Profile}
              alt=""
              className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 w-81 z-10"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
