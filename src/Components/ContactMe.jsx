import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useState } from "react";
import Framer from "../Framer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CssTextField = styled(TextField)({
  "& .MuiInput-root": {
    color: "#E0E0E0",
    "&:before": {
      borderColor: "#C69749",
    },
    "&:after": {
      borderColor: "#C69749",
    },
    ":hover:not(.Mui-focused)": {
      "&:before": {
        borderColor: "#C69749",
      },
    },
  },
  "& .MuiInputLabel-standard": {
    color: "#B0B0B0",
    "&.Mui-focused": {
      color: "#B0B0B0",
    },
  },
});

export default function ContactMe() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_FORM_API}`,
        data
      );
      e.target.reset();
      handleOpen();
      console.log("Success:", response.data);
    } catch (error) {
      // Error handling
      console.error("Error:", error);
      if (error.response) {
        alert(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        alert("Network error. Please check your connection.");
      } else {
        alert("Request setup error.");
      }
    }
  };

  return (
    <Framer>
      <div className="mb-5 lg:mt-[10rem] mt-[5rem]" id="Contact">
        <h1 className="text-[#E0E0E0] xs:text-[3rem] lg:text-[4rem] font-light">
          CONTACT ME
        </h1>
        <h6 className="text-[#B0B0B0]">Reach Out to Me</h6>
      </div>
      <form className="text-center flex mt-10" onSubmit={handleSubmit}>
        <Stack
          direction="column"
          spacing={3}
          className="xs:w-full lg:w-[75%] w-1/2"
        >
          <Stack direction="row" spacing={3}>
            <CssTextField
              type="text"
              name="Name"
              label="Name"
              variant="standard"
              className="w-full"
              required
            />
            <CssTextField
              type="email"
              name="Email"
              label="Email"
              variant="standard"
              className="w-full"
              required
            />
          </Stack>
          <CssTextField
            type="text"
            name="Message"
            label="Type your message here..."
            variant="standard"
            multiline
            rows={7}
            className="w-full"
            required
          />
          <Button
            variant="contained"
            className="rounded-none"
            color="primary"
            sx={{
              borderRadius: 0,
              height: 50,
              boxShadow: "none",
              backgroundColor: "#C69749",
              "&:hover": {
                backgroundColor: "#C67949",
              },
            }}
            type="submit"
          >
            Submit
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ textAlign: "center" }}
              >
                Thank you! Your form has been successfully submitted.
              </Typography>
            </Box>
          </Modal>
        </Stack>
      </form>
    </Framer>
  );
}
