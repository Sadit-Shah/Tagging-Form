'use client'
import { useState } from 'react';
import axios from 'axios';

const Complaints = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('http:localhost:3000/api/compliants', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred while uploading the file.',error.message);
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Upload an Excel File</h2>
      <input type="file" accept=".xls, .xlsx" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
};

export default Complaints;
