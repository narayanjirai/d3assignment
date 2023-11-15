
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SideBar from './components/SideBar/SideBar';
import MainPage from './components/MainPage/MainPage';
import Navbar from "./components/Navabar/Navbar";
function App() {
  return (
   
      <Router>
        <div style={{display:"flex"}}>
          <div style={{ width: '15%'}}><SideBar/> </div>
          <div style={{ width: '85%'}}>
            <Routes>
              <Route path='/mainpage' element={<MainPage />} />
            </Routes>
          </div>
          </div>
      </Router>
   
  );
}

export default App;
