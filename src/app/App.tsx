import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Row, Col } from 'antd';
import { RoutedApp } from './RoutedApp';
import { useTranslation } from 'react-i18next';
import { LanguageMenu } from '../common/components/LanguageMenu';
import { DEFAULT_KEY } from './constants/constants';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.less';

const { Header, Sider, Content } = Layout;

export const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation('common');
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleClick = (path: string) => {
    navigate(path);
  };

  const keyLocation = location.pathname.includes('user')
    ? DEFAULT_KEY
    : location.pathname;

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        breakpoint="sm"
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[keyLocation]}
          items={[
            {
              key: '/',
              icon: <UserOutlined />,
              label: t('menu.user'),
              onClick: () => handleClick('/'),
            },
            {
              key: '/currency',
              icon: <VideoCameraOutlined />,
              label: t('menu.currency'),
              onClick: () => handleClick('/currency'),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row>
            <Col flex={1}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
            <Col>
              <LanguageMenu />
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className="app-main-content-container"
        >
          <RoutedApp />
        </Content>
      </Layout>
    </Layout>
  );
};
