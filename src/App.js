import React from "react";
import Home from "./pages/Home"
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Cart from "./pages/cart";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration

} from "react-router-dom"
const Layout=()=>{
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>

    </div>
  );
};
const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
  },
]);

function App() {
  return (
    <div className="App font-bodyFont">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
