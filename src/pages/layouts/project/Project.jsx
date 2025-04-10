import { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../../../components/Navbar/Navbar";
import Paspor_Officer from "../../../assets/paspor_officer.png";
import Sigap_Admin from "../../../assets/sigap_admin.png";
import Sigap_Mobile from "../../../assets/sigap_mobile.png";
import GoTravel from "../../../assets/gotravel.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Project(props) {
  console.log("Projects", props);

  const [title, setTitle] = useState("Projects");

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
            <Box className="w-full p-2">
              <Zoom>
                <img src={Paspor_Officer} alt="" className="h-96" />
                <Box>
                  <p className="pt-2 text-center text-lg">
                    Molina Paspor - Officer
                  </p>
                  <p className="pt-2 text-justify text-sm indent-5">
                    Molina Paspor is an application developed by the Directorate
                    General of Immigration in making passports for overseas
                    crossings. There are several parts in the application,
                    namely users and officers.
                  </p>
                  <p className="pt-2 text-justify text-sm">
                    Programming languages used :
                  </p>
                  <ul className="list-disc pl-6 text-sm">
                    <li>Frontend {"=>"} Javascript (React, Node.js)</li>
                    <li>
                      Backend {"=>"} PHP (Native {"->"} Laravel)
                    </li>
                    <li>Connecting Device {"=>"} C#</li>
                  </ul>
                </Box>
              </Zoom>
            </Box>
            <Box className="w-full p-2">
              <Zoom>
                <img src={Sigap_Admin} alt="" className="h-96" />
                <Box>
                  <p className="pt-2 text-center text-lg">
                    SIGAP - Admin Panel
                  </p>
                  <p className="pt-2 text-justify text-sm indent-5">
                    SIGAP (Sistem Informasi Gabungan Administrasi Protokol) is
                    an application developed by the DPR which aims to increase
                    efficiency, transparency, and accuracy in managing protocol
                    and administrative activities of DPR members. There are
                    several applications that have been developed, one of which
                    is this admin panel web application.
                  </p>
                  <p className="pt-2 text-justify text-sm">
                    Programming languages used :
                  </p>
                  <ul className="list-disc pl-6 text-sm">
                    <li>Frontend {"=>"} Javascript (React, Node.js)</li>
                    <li>Backend {"=>"} PHP (Laravel)</li>
                    <li>Connecting Device {"=>"} C#</li>
                  </ul>
                </Box>
              </Zoom>
            </Box>
            <Box className="w-full p-2">
              <Zoom>
                <img src={Sigap_Mobile} alt="" className="h-96" />
                <Box>
                  <p className="pt-2 text-center text-lg">SIGAP - Mobile</p>
                  <p className="pt-2 text-justify text-sm indent-5">
                    SIGAP (Sistem Informasi Gabungan Administrasi Protokol) is
                    an application developed by the DPR which aims to improve
                    attendance and accuracy in managing the protocol and
                    administrative activities of DPR members. There are several
                    applications that have been developed, one of which is this
                    mobile application.
                  </p>
                  <p className="pt-2 text-justify text-sm">
                    Programming languages used :
                  </p>
                  <ul className="list-disc pl-6 text-sm">
                    <li>Frontend {"=>"} Javascript (React)</li>
                    <li>Backend {"=>"} PHP (Laravel)</li>
                  </ul>
                </Box>
              </Zoom>
            </Box>
          </Box>

          <Box className="w-full flex gap-2 p-2">
            <Box className="w-full p-2">
              <Zoom>
                <img src={GoTravel} alt="" className="h-96" />
                <Box>
                  <p className="pt-2 text-center text-lg">GoTravel</p>
                  <p className="pt-2 text-justify text-sm indent-5">
                    GoTavel is an application that aims to make it easier for
                    the people of Central Tapanuli Regency, North Sumatra to
                    vacation with their families. I created this application
                    myself for my final assignment.
                  </p>
                  <p className="pt-2 text-justify text-sm">
                    Programming languages used :
                  </p>
                  <ul className="list-disc pl-6 text-sm">
                    <li>Frontend {"=>"} Javascript (React)</li>
                    <li>Backend {"=>"} PHP (Native)</li>
                  </ul>
                </Box>
              </Zoom>
            </Box>
            <Box className="w-full p-2"></Box>
            <Box className="w-full p-2"></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
