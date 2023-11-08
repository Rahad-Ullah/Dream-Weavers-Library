import { PDFViewer } from "@react-pdf/renderer";
import PdfBook from "./PdfBook";
// import ReactDOM from 'react-dom';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PdfBookViewer = () => {
    const id = useParams().id
    const [book, setBook] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/book/${id}`)
        .then(res => res.json())
        .then(data => setBook(data))
    } ,[id])
    
    return (
        <div className="sticky top-0 z-10">
            <PDFViewer className="w-full h-screen mx-auto">
                <PdfBook book={book} />
            </PDFViewer>
        </div>
    );
};


export default PdfBookViewer;