import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import Navbar from "../../../components/Navbar/Navbar";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoSend } from "react-icons/io5";

export default function Contact() {
  const [dataForm, setDataForm] = useState({
    fromEmail: "",
    toEmail: "tiganareymansyah2502@gmail.com",
    message: "",
  });

  const handleChange = (fieldName, value) => {
    setDataForm((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSendChat = () => {
    const payload = {
      fromEmail: dataForm?.fromEmail,
      toEmail: dataForm?.toEmail,
      message: dataForm?.message,
    };

    console.log("Payload", payload);
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
        <Box className="flex justify-evenly items-center pt-10">
          <Box className="flex flex-col gap-3">
            <p className="text-3xl">Other Contacts :</p>
            <Box className="flex items-center gap-2">
              <IoLogoWhatsapp fontSize={22} />
              <p className="text-base">082267274100</p>
            </Box>
            <Box className="flex items-center gap-2">
              <IoMdMail fontSize={22} />
              <p className="text-base">tiganareymansyah2502@gmail.com</p>
            </Box>
          </Box>

          <Box className="relative w-90">
            <Box
              sx={{ backgroundColor: "#8F503F" }}
              className="w-90 rounded-2xl p-4"
            >
              <p className="text-2xl text-center" style={{ color: "#FAEBD7" }}>
                Let's Chat!
              </p>

              <Box className="flex flex-col gap-2 pt-8">
                <Box>
                  <p style={{ color: "#FAEBD7" }}>From Email :</p>
                  <TextField
                    placeholder="From email"
                    id="fromEmail"
                    name="fromEmail"
                    variant="outlined"
                    fullWidth
                    value={dataForm?.fromEmail}
                    onChange={(e) => handleChange("fromEmail", e.target.value)}
                    sx={{
                      "&.MuiFormControl-marginNormal": {
                        marginTop: "0px",
                      },
                      backgroundColor: "#FAEBD7",
                      borderRadius: "8px",
                    }}
                  />
                </Box>

                <Box>
                  <p style={{ color: "#FAEBD7" }}>To Email :</p>
                  <TextField
                    id="toEmail"
                    name="toEmail"
                    variant="outlined"
                    fullWidth
                    defaultValue={dataForm?.toEmail}
                    disabled
                    sx={{
                      "&.MuiFormControl-marginNormal": {
                        marginTop: "0px",
                      },
                      backgroundColor: "#FAEBD7",
                      borderRadius: "8px",
                    }}
                  />
                </Box>

                <Box>
                  <p style={{ color: "#FAEBD7" }}>Message :</p>
                  <TextField
                    placeholder="Please fill in..."
                    id="message"
                    name="message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={5}
                    value={dataForm?.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    sx={{
                      backgroundColor: "#FAEBD7",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </Box>

              <Box className="pt-8 flex justify-end">
                <Button
                  sx={{
                    padding: "7px 14px",
                    cursor: "pointer",
                    borderRadius: "6px",
                    color: "#8F503F",
                    backgroundColor: "#FAEBD7",
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                    textTransform: "capitalize",
                  }}
                  endIcon={<IoSend />}
                  onClick={handleSendChat}
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
