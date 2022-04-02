import React, { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';
import SidebarData from './SidebarData';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
        <div className='navbar'>
          <Link to='#'>
            <MenuRoundedIcon fontSize='large' onClick={showSidebar} />
          </Link>
        </div>
        <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
           
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                           {item.icon}
                    <span> {item.title} </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
    </div>
  );
}

export default Navbar;