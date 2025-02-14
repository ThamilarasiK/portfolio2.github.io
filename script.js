
// Import required libraries
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const XLSX = require('xlsx');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  try {
    // Extract form data
    const formData = req.body;

    // Convert form data to Excel format
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet([formData]);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'FormData');

    // Write Excel file to disk
    const excelFilePath = 'formData.xlsx';
    XLSX.writeFile(workbook, excelFilePath);

    // Send response
    res.download(excelFilePath);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
