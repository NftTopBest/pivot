import { EthProvider } from "./contexts/EthContext";
import { RouterProvider } from "react-router-dom";
import router from './router';
import './App.css';
import './App.scss';


function App() {
  return (
    <EthProvider>
      <RouterProvider router={router}></RouterProvider>
    </EthProvider>
  );
}

export default App;
