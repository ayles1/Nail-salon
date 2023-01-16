import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import App from "../Components/App";
import ConfirmationAlert from "../Components/UI/ConfirmationAlert";
import EnrollModal from "../Components/Enroll/EnrollModal";
import AvitoReviewList from "../Components/RatingTab/AvitoReviewList";
import ReviewItemList from "../Components/RatingTab/ReviewList";
import WriteReviewModal from "../Components/RatingTab/WriteReviewModal";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/enroll" element={<EnrollModal/>}/>
      <Route path="/confirmation/:type" element={<ConfirmationAlert/>}/>
      <Route path="postreview"  element={<WriteReviewModal/>}/>
      <Route path="#reviews" element={<ReviewItemList/>}>
        <Route path="#reviews/avito" element={<AvitoReviewList/>}/>
        <Route path="#reviews/this-site" element ={<ReviewItemList/>}/>
      </Route>
    </Route>
    )
    );
    

    const Routing = ({children}) =>{
    return (
      <RouterProvider router={router}>{children}</RouterProvider>
    )
  }

  export default Routing