
import { useRoutes } from 'react-router-dom';
import { About } from '../Pages/About';
import { Home } from '../Pages/Home';



export default function Router() {
    return useRoutes([
        {
            path: '/home',
            element: <Home />,

        },

        {
            path: '/about',
            element: <About />,

        },


    ]);
}


