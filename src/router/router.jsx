// import { createBrowserRouter } from "react-router-dom";
// import { userHandler } from "../handler/userHandler";
// import NotFound from "../pages/NotFound";
// import HomeView from "../pages/HomeView";
// import Register from "../pages/Register";
// import Root from "./Root";


// export const router = createBrowserRouter([
//     { 
//         path: '/',
//         element: <Root/>,
//         errorElement: <NotFound />, 
      
//                 children: [
//                     {
//                         index: true,
//                         element:<Root/>, 
//                         loader: loaderAdvertisement,
//                     },
//                     {
//                         path: '/Register',
//                         element: <Register/>,
//                     },
//                     {
//                         path: '/Home',
//                         element: <HomeView />,
//                     },
//                     {
//                         path: '/userDashboard',
//                         element: <UserDashboard />,
//                         loader: loaderAdvertisement, 
//                     },    
//                     {
//                         path: '/userProfile',
//                         element: <UserProfile />,
//                         loader: loaderAdvertisement,
//                     },  
//                     {
//                         path: '/admDashboard',
//                         element: <AdmDashboard />,
//                         loader: loaderAdvertisement,
//                     },  
//                     {
//                         path: '/contactUs',
//                         element: <ContactUs />,
//                         loader: loaderAdvertisement,
//                     },  
//                     {
//                         path: "admDashboard/editProduct/:id",
//                         element: <EditProduct />,
//                         loader: loaderCardUser, 
//                     },    
//                     {
//                         path: '/CookiesPolicy',
//                         element:<CookiesPolicy/>
                        
//                     },
                
//                 ]
//             },
        
//         ]
//     },   
// ]);

// async function loaderUser  ({ params })  {
//     const User = await userHandler.loadUser(params.id)  
//     return { User, params };
// };

// async function loaderEvaluations () {
//     const evaluations = await productHandler.loadEvaluations()
//     return { evaluations };
//     };

import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from '../App';
import RegisterCoder from '../pages/RegisterCoder';
import UserView from '../pages/UserView';
import RegisterInstructor from '../pages/RegisterInstructor';
import LoginView from '../pages/LoginView';
import AdminView from '../pages/AdminView';
import Contact from '../pages/Contact';
import LoggedViewTest from '../pages/LoggedViewTest';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/Register' element={<RegisterCoder />} />
                <Route path='/RegisterInstructor' element={<RegisterInstructor/>} />
                <Route path='/Login' element={<LoginView />}/>
                <Route path='/AdminDashboard' element={<AdminView />} /> 
                <Route path='/Contact' element={<Contact/>} />
                <Route path='/LoggedViewTest' element={<LoggedViewTest/>} />
                <Route path='/UserDashboard' element={<UserView/>} />
            </Routes>
        </BrowserRouter>
    )
}


export default Router; 