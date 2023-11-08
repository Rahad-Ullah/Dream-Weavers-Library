import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";
import CategoryDetails from "../pages/CategoryDetails/CategoryDetails";
import BookDetails from "../pages/BookDetails/BookDetails";
import PdfBookViewer from "../pages/PdfBook/PdfBookViewer";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'books/:category',
                element: <CategoryDetails></CategoryDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/books/${params.category}`)
            },
            {
                path: 'book/:id',
                element: <BookDetails></BookDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
            },
            {
                path: '/pdf-view/:id',
                element: <PdfBookViewer></PdfBookViewer>,
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
    ]
    }
])

export default router;