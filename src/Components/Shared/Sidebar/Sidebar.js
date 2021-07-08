import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.scss'

const Sidebar = () => {
    return (
        <div>
            <ProSidebar>
  <Menu iconShape="square">
    <MenuItem >Dashboard</MenuItem>
    
    <SubMenu title="Components">
      <MenuItem>Component 1</MenuItem>
      
    </SubMenu>
  </Menu>
</ProSidebar>


{/* <ProSidebar>
  <Menu iconShape="square">
    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
    <SubMenu title="Components" icon={<FaHeart />}>
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar> */}
        </div>
    );
};

export default Sidebar;