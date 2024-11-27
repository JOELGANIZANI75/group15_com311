import { createBrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from "./components/Signup";
import App from './App'

const router =createBrowserRouter([
    
    {
        path:'/',
        element:<App/>,
    },
    {
        path:'/home',
        element:<Home/>,
    },
    {
        path:'/Login',
        element:<Login/>,
    },
    
    {
        path:'/Signup',
        element:<Signup/>
    }
])
export default router;