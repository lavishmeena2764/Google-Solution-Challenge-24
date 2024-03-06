import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PersonIcon from "@mui/icons-material/Person";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import PDFUpload from "../components/PDFUpload";
/* global process */
const defaultTheme = createTheme();

function Upload() {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    // Preview the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);

      // Send formData to your backend for processing
      const response = await fetch(
        process.env.REACT_APP_SKIN_CANCER_MODEL_PATH,
        {
          method: "POST",
          body: formData,
        }
      );

      // Handle response from backend (e.g., display prediction results)
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <Container
        component="main"
        maxWidth="xs"
        className="bg-white p-6 mt-8 mb-6"
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#1c9bcd" }}>
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ marginBottom: 4 }}>
            File Upload for Analysis
          </Typography>
          <form onSubmit={handleSubmit}>
            <input
              accept="image/*"
              id="contained-button-file"
              type="file"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                component="span"
                sx={{ mb: 2, bgcolor: "#1c9bcd", width: 200 }}
              >
                Select Image
              </Button>
            </label>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ maxWidth: "100%", maxHeight: 200 }}
              />
            )}
            <PDFUpload />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#1c9bcd", width: 200 }}
            >
              Analyze
            </Button>
          </form>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default Upload;
