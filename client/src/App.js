import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import AddUser from "./components/adduser/AddUser"
import User from "./components/getuser/User";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Update from "./components/updateuser/Update";


function App() {
   const route = createBrowserRouter([
     {
       path: "/",
       element: <User />,
     },
     {
       path: "/add",
       element: <AddUser />,
     },
     {
       path: "/update/:id",
       element: <Update />,
     },
   ]);
   return (
     <div className="App">
       <RouterProvider router={route}></RouterProvider>
     </div>
   );
 }
 
 export default App;