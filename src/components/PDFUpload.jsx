/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "@mui/material/Button";
const PDFUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileChange(event) {
    const file = event.target.files[0];
    console.log(file);
    setSelectedFile(file);
  }

  return (
    <div>
      <label htmlFor="pdf" />
      <input
        type="file"
        accept=".pdf, .txt"
        onChange={handleFileChange}
        id="pdf"
        style={{ display: "none" }}
      />
      <label htmlFor="pdf">
        <Button
          variant="contained"
          component="span"
          sx={{ mb: 2, bgcolor: "#1c9bcd", width: 200 }}
        >
          Select PDF/Text
        </Button>
      </label>
    </div>
  );
};

export default PDFUpload;
