import { Layout } from 'antd';
import React from 'react';
import logo from '../assets/Rick_and_Morty_logo.png';
import './Header.scss';

const { Header } = Layout;

const HeaderLogo: React.FC = () => (
  <Layout>
    <Header className="header">
      <div>
        <img className="logo_Header" src={logo} alt="icon" />
      </div>
    </Header>
  </Layout>
);

export default HeaderLogo;
