import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import App from "../Components/App";
import EnrollModal from "../Components/Enroll/EnrollModal";
import WriteReviewModal from "../Components/RatingTab/WriteReviewModal";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/enroll" element={<EnrollModal/>}/>
      <Route path="postreview" element={<WriteReviewModal/>}/>
    </Route>
    )
    );
    
    const Routing = ({children}) =>{
    return (
      <RouterProvider router={router}>{children}</RouterProvider>
    )
  }

  export default Routing