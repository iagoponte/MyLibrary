import RoutesApp from "./services/RoutesApp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";




export default function App() {
  return (
    <>
    <ToastContainer />
    <RoutesApp/>

    </>
  );
}

