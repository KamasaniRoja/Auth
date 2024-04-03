// import React from 'react'

// export const Footer = () => {
//     const footerStyle = {
//         backgroundColor: '#333',
//         color: '#fff',
//         padding: '10px',
//         // marginTop: '20px',
//         textAlign:'Center'
//       };
//   return (
//     <div style={footerStyle}>Footer</div>
//   )
// }

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

function Footer() {
  return (
    <AppBar position="static" color="primary" style={footerStyle}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Footer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;


