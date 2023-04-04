import { UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, type MenuProps } from 'antd';
import React, { useState } from 'react';
import CharactersList from '../Characters/CharactersList';
import './Header.scss';
import HeaderLogo from './HeaderLogo';
import './SiderComponent.scss';

const { Content, Sider } = Layout;

const SiderComponent: React.FC = () => {
  const items: MenuProps['items'] = [UserOutlined].map(() => ({
    key: `Категория`,
    label: `Категория`,
    children: [
      {
        key: '1',
        label: `Alive`,
        onClick: () => {
          setSatus('Alive');
        },
      },
      {
        key: '2',
        label: `Dead`,
        onClick: () => {
          setSatus('Dead');
        },
      },
      {
        key: '3',
        label: 'Unknow',
        onClick: () => {
          setSatus('Unknow');
        },
      },
    ],
  }));

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [status, setSatus] = useState('');

  return (
    <>
      <HeaderLogo />
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu mode="inline" items={items} />
          <div className="sider-button">
            <button
              type="button"
              onClick={() => {
                setSatus('');
              }}
            >
              Очистить фильтры
            </button>
          </div>
        </Sider>

        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} />
          <Content>
            <CharactersList lives={status} />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default SiderComponent;
