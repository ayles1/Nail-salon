import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import App from '../Components/App'
import ConfirmationAlert from '../Components/UI/ConfirmationAlert'
import EnrollModal from '../Components/Enroll/EnrollModal'
import ReviewItemList from '../Components/RatingTab/ReviewList'
import WriteReviewModal from '../Components/RatingTab/WriteReviewModal'
import EnrollDetails from '../Components/Enroll/EnrollDetails'
import EnrollSubmit from '../Components/Enroll/EnrollSubmit'
import NavbarMobile from '../Components/NavbarMobile'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/nav" element={<NavbarMobile />} />
            <Route path="/enroll" element={<EnrollModal />}>
                <Route path="/enroll/details" element={<EnrollDetails />} />
                <Route path="/enroll/submit" element={<EnrollSubmit />} />
            </Route>
            <Route path="/confirmation/:type" element={<ConfirmationAlert />} />
            <Route path="postreview" element={<WriteReviewModal />} />
            <Route path="#reviews" element={<ReviewItemList />} />
        </Route>
    )
)

function Routing({ children }) {
    return <RouterProvider router={router}>{children}</RouterProvider>
}

export default Routing
