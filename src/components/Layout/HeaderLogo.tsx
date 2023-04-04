import { Layout } from 'antd';
import React from 'react';
import logo from '../assets/Rick_and_Morty_logo.png';
import './Header.scss';

const HeaderLogo: React.FC = () => (
  <Layout>
    <header className="header">
      <div>
        <img className="logo_Header" src={logo} alt="icon" />
      </div>
    </header>
  </Layout>
);

export default HeaderLogo;
