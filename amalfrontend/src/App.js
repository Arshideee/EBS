import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
// import Header from './Header/Header';
function App() {
  return (
 <>
 <Router>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
  <ToastContainer />
 </Router>
 </>
  );
}

export default App;
