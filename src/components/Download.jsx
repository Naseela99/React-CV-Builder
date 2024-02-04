import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const PdfDownloadComponent = () => {
  const handleDownloadPDF = () => {
    const input = document.querySelector('.cv-render'); 
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpg');
      const pdf = new jsPDF('p', 'pt', [canvas.height, canvas.width]);
      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save('Resume.pdf'); 
    });
  };
  return (
    <div>
      <button onClick={handleDownloadPDF} class='add-btn'>Download PDF</button>
    </div>
  );
};
export default PdfDownloadComponent;