import React, { useState } from "react";
import { BurgerMenu, NotificationIcon, Searchbar,SearchIcon,Topbar, TopbarItems } from './TopbarStyles'
import search from '../../assets/images/search.png'
import notifications from '../../assets/images/notifications.png'
import { Img } from "../GlobalStyles";

const TopBar = ({sidebarOpen,sidebartoggle}) => {
  const [text, setText] = useState("");
  const clearInput = () => {
    setText("");
  };
  const Search = evt =>{
    if (evt.key === "Enter")
    setText("")
  }
  return (
    <Topbar>
      <BurgerMenu isOpen="true" onClick={sidebartoggle}/>
        <TopbarItems isOpen={sidebarOpen}>
            <Searchbar>
                <SearchIcon>
                  <Img src={search} alt='search' onClick={clearInput} />
                </SearchIcon>
                <input type="text"
                     placeholder='Global Search...' 
                     onChange={e => setText(e.target.value)}
                     value={text}
                     onKeyPress={Search}
                     />
            </Searchbar>
            <NotificationIcon>
                <Img src={notifications} alt='notifications' />
            </NotificationIcon>
        </TopbarItems>
    </Topbar>
  )
}

export default TopBar