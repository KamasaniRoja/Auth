// import React from 'react'

// export const Header = () => {
//     const headerStyle = {
//         backgroundColor: '#333',
//         color: '#fff',
//         padding: '10px',
//         textAlign:'Center'
//       };
    
//   return (
//     <div style={headerStyle}>Header</div>
//   )
// }

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const headerStyle = {
  flexGrow: 10,
  textAlign:'center'
};

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" style={headerStyle}>
          Header
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

