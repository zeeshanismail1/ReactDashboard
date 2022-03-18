import React from 'react'
import { SidebarData } from './SidebarData';
import { Profile, 
Setting, 
SidebarLi, 
SidebarLink, 
SidebarsItems, 
Sidebar, 
SidebarMenu, 
LogoText, 
FooterText,
ClosedIcon} from './SideBarStyles';
import webevis from '../../assets/images/webevis.png'
import settings from '../../assets/images/settings.png'
import toggle from '../../assets/images/toggle.png'
import Heading from '../Heading/Heading';
import { Img } from '../GlobalStyles';
import { Divider } from '../Task/TaskStyles';



const SideBar = ({sidebarOpen, sidebartoggle}) => {
    
    return (
          <Sidebar className='Sidebar' isOpen={sidebarOpen}>
              <SidebarMenu isOpen={sidebarOpen}> 
                  <LogoText >
                      Webevis
                      <LogoText isOpen={sidebarOpen}>Technologies</LogoText>
                 </LogoText>
                 <Divider />
                <Profile>
                        <Img src={webevis} alt="webevis" />
                </Profile>
              <SidebarsItems>
                  {SidebarData.map((item, index) => {
                      return(<>
                          <SidebarLi key={index} isOpen={sidebarOpen} >
                              <SidebarLink to={item.path} activeClassName="active" isOpen={sidebarOpen} >
                              {item.icon}
                                   {item.title}
                              </SidebarLink>
                          </SidebarLi>
                          <ClosedIcon key={index} isOpen={sidebarOpen}>
                          <SidebarLink to={item.path} activeClassName="active" isOpen={sidebarOpen} >
                          {item.icon}
                          </SidebarLink>
                      </ClosedIcon>
                      </>
                          
                      );
                  }) }
                  <Divider />
              </SidebarsItems>
              
                  <Setting>
                      <Img src={settings} alt ='settings' />
                      <Heading level={4} isOpen={sidebarOpen}>
                          Setting
                      </Heading>
                  </Setting>
              </SidebarMenu>
              <FooterText>
                      <Img src={toggle} alt ='toggle' isOpen={sidebarOpen} onClick={sidebartoggle} />
                      <Heading level={6} isOpen={sidebarOpen}> Toggle sidebar</Heading>
              </FooterText>
          </Sidebar>
    )
}

export default SideBar
