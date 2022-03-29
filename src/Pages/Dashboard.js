import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from '../components/Sidebar/Sidebar'
import Home from './Home';
import TopBar from '../components/Topbar/Topbar';
import Email from './Email';
import SubscribersPage from './SubscribersPage';


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
         <Route path='/subscribers' exact element={<SubscribersPage sidebarOpen={sidebarOpen}/>} />
         <Route path='/email' exact element={<Email sidebarOpen={sidebarOpen}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default Dashboard;
