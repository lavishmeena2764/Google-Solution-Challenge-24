import { useState } from "react";
import Button from "@mui/material/Button";
const PDFUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Selected File:", selectedFile);
    } else {
      alert("Please select a file before uploading.");
    }
  };

  return (
    <div>
      <label htmlFor="pdf" />
      <input
        type="file"
        accept=".pdf, .txt"
        id="pdf"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <label htmlFor="pdf">
        <Button
          variant="contained"
          component="span"
          sx={{ mb: 2, bgcolor: "#1c9bcd" }}
        >
          Select PDF/Text
        </Button>
      </label>
    </div>
  );
};

export default PDFUpload;
