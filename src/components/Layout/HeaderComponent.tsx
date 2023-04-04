import { Layout } from 'antd';
import React from 'react';
import './Header.scss';
import SiderComponent from './SiderComponent';

const HeaderComponent: React.FC = () => (
  <Layout>
    <SiderComponent />
  </Layout>
);

export default HeaderComponent;
