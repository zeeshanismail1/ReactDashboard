import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from '../components/Sidebar/Sidebar'
import Home from './Home';
import Team from './Contact';
import Chat from './Chat';
import TopBar from '../components/Topbar/Topbar';


function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebartoggle = () =>{
    setSidebarOpen(!sidebarOpen);
};
  return (
    <>
      <Router>
      <TopBar sidebarOpen={sidebarOpen} sidebartoggle={sidebartoggle}/>
       <SideBar sidebarOpen={sidebarOpen} sidebartoggle={sidebartoggle} />
       <Routes>
         <Route path='/' exact element={<Home sidebarOpen={sidebarOpen}/>} />
         <Route path='/task' exact element={<Home sidebarOpen={sidebarOpen}/>} />
         <Route path='/email' exact element={<Home sidebarOpen={sidebarOpen}/>} />
         <Route path='/contact' element={<Team sidebarOpen={sidebarOpen}/>} />
         <Route path='/chat' element={<Chat sidebarOpen={sidebarOpen}/>} />
         <Route path='/deal' exact element={<Home sidebarOpen={sidebarOpen}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default Dashboard;
