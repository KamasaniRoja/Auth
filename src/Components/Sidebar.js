// import React from 'react'


// export const Sidebar = () => {
//     const sidebarStyle = {
//         background: 'linear-gradient(#f4f4f4, #ddd)',
//         width: '200px',
//         padding: '10px',
//     };
//     return (
//         <div style={sidebarStyle}>
//             <ul>
//                 <li>
//                     <a href="/home">Home</a>
//                 </li>
//                 <li>
//                     <a href="/about">About</a>
//                 </li>
//             </ul>
//         </div>
//     )
// }

import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home as HomeIcon, Info as InfoIcon } from '@mui/icons-material';

const sidebarStyle = {
  width: '200px',
  padding: '10px',
};

// const listItemStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   textDecoration: 'none',
//   color: 'inherit',
// };

function Sidebar() {
  return (
    <Drawer variant="permanent" anchor="left" sx={sidebarStyle}>
      <List>
        <ListItem button component={Link} to="/home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;


