import React from 'react';
import Utils from '../../utils';
import LoginConfig from '../../Pages/LoginConfig';
import AboutConfig from '../../Pages/AboutConfig';
import HomeConfig from '../../Pages/HomeConfig';

import Redirect  from 'react-router-dom';

const routeConfigs = [
  LoginConfig,
  AboutConfig,
  HomeConfig,

];

const routes = [
  ...Utils.generateRoutesFromConfigs(routeConfigs),
  {
    path: '/',
    exact: true,
    
    component: () => <Redirect to="/home" />,
    settings: {
      layout: {
        config: {
          navbar: {
            display: false
          },
          toolbar: {
            display: true
          },
          footer: {
            display: true
          },
          leftSidePanel: {
            display: false
          },
          rightSidePanel: {
            display: false
          }
        }
      }
    }
  }
];

export default routes;
