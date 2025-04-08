import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { TbWhirl } from "react-icons/tb";

export default function Navbar() {
  const styles = {
    colorBar: (isActive) => ({
      color: isActive ? "#000" : "#8F503F",
      fontSize: "12px",
      height: "32px",
      borderBottom: isActive ? "3px solid #000" : "none",
      borderRadius: 0,
      "&:hover": {
        color: "#000",
        borderBottom: "3px solid #000",
        borderRadius: 0,
      },
    }),
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FAEBD7",
          color: "#8F503F",
          padding: "16px",
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
        }}
      >
        <Box className="flex justify-center items-center p-4">
          <TbWhirl fontSize={40} className="cursor-pointer" />
          <Box className="flex cursor-pointer">
            <span className="text-2xl pl-1">My</span>
            <span className="text-base text-black tracking-widest">
              Portofolio
            </span>
          </Box>
        </Box>

        <Box className="flex justify-center gap-24 p-4">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <Button
                variant="text"
                startIcon={<FaHome />}
                sx={styles.colorBar(isActive)}
              >
                Home
              </Button>
            )}
          </NavLink>

          <NavLink to="/project" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <Button
                variant="text"
                startIcon={<FaLaptopCode />}
                sx={styles.colorBar(isActive)}
              >
                Projects
              </Button>
            )}
          </NavLink>

          <NavLink to="/certificate" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <Button
                variant="text"
                startIcon={<GrCertificate />}
                sx={styles.colorBar(isActive)}
              >
                Certificates
              </Button>
            )}
          </NavLink>

          <NavLink to="/contact" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <Button
                variant="text"
                startIcon={<IoIosCall />}
                sx={styles.colorBar(isActive)}
              >
                contact
              </Button>
            )}
          </NavLink>
        </Box>
      </Box>

      <Box
        className="flex justify-center items-center p-4 w-full fixed bottom-0"
        sx={{ backgroundColor: "#FAEBD7" }}
      >
        <footer
          className="font italic tracking-wide"
          style={{ color: "#8F503F" }}
        >
          &copy; 2025. Tigana Reymansyah
        </footer>
      </Box>
    </>
  );
}
