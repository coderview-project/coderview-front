import { createBrowserRouter } from "react-router-dom";
import { userHandler } from "../handler/userHandler";
import NotFound from "../pages/NotFound";



export const router = createBrowserRouter([
    { 
        path: '/',
        element: <Root/>,
        errorElement: <NotFound />, 
      
                children: [
                    {
                        index: true,
                        element:<Home />, 
                        loader: loaderAdvertisement,
                    },
                    {
                        path: '/Register',
                        element: <Register/>,
                    }, 
                    // {
                    //     path: '/join',
                    //     element: <Join />,
                    // },
                    // {
                    //     path: '/login',
                    //     element: <Login />,
                    // },
                    // {
                    //     path: '/userDashboard',
                    //     element: <UserDashboard />,
                    //     loader: loaderAdvertisement, 
                    // },    
                    // {
                    //     path: '/userProfile',
                    //     element: <UserProfile />,
                    //     // loader: loaderAdvertisement,
                    // },  
                    // {
                    //     path: '/admDashboard',
                    //     element: <AdmDashboard />,
                    //     loader: loaderAdvertisement,
                    // },  
                    // {
                    //     path: '/contactUs',
                    //     element: <ContactUs />,
                    //     loader: loaderAdvertisement,
                    // },  
                    // {
                    //     path: "admDashboard/editProduct/:id",
                    //     element: <EditProduct />,
                    //     loader: loaderCardUser, 
                    // },    
                    // {
                    //     path: '/CookiesPolicy',
                    //     element:<CookiesPolicy/>
                        
                    // },
                
                ]
            },
        
    //     ]
    // },   
]);

async function loaderUser  ({ params })  {
    const User = await userHandler.loadUser(params.id)  
    return { User, params };
};

async function loaderEvaluations () {
    const evaluations = await productHandler.loadEvaluations()
    return { evaluations };
    };