import 'dayjs/locale/zh-cn';
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from '../layout';
import Homepage from '../pages/homepage';
import Publish from '../pages/publish';
import Mine from '../pages/mine';
import Detail from '../pages/detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to='/homepage' />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/homepage",
        element: <Homepage />
      },
      {
        path: "/publish",
        element: <Publish />
      },
      {
        path: "/mine",
        element: <Mine />
      },
      {
        path: "/detail/:tokenId",
        element: <Detail />
      },
    ]
  },
]);
export default router