import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import "./styles.css";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function App() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="App">
      <h1>Hello To Drag & Drop Files</h1>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      <p>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
    </div>
  );
}
