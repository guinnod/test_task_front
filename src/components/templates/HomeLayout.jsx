import { Button, Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LogoInline } from "@components/molecules/Logo";
import useScreenType from "react-screentype-hook";
import { PostCreator } from "@components/molecules/PostCreator";
const { Header, Sider, Content, Footer } = Layout
export const HomeLayout = () => {
  const [theme, setTheme] = useState("light");
  const location = useLocation();
  const defaultKeys = location.pathname.includes("profile") ? ['1'] : ['2'];
  const items = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: <Link to="/profile">Profile</Link>
    },
    {
      key: '2',
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>
    },
    {
      type: 'divider'
    },
    {
      key: '3',
      icon: <LogoutOutlined />,
      label: <Link to="/logout">Log out</Link>
    }
  ];
  const { isMobile } = useScreenType();

  const [isPostCreate, setIsPostCreate] = useState(false);
  const tooglePostCreate = () => {
    setIsPostCreate(!isPostCreate);
  }
  return (
    <>
      <PostCreator open={isPostCreate} onCancel={tooglePostCreate} />
      <Layout className="h-full">
        <Header className="flex items-center justify-between px-5 bg-zinc-50 border-0 border-b border-solid border-gray-200">
          <LogoInline />
          <Button type="primary" size="large" onClick={tooglePostCreate}>Tweet</Button>
        </Header>
        <Layout>
          <Sider theme={theme}
            collapsed={isMobile}
            style={{ backgroundColor: 'rgb(250 250 250 / 1' }} >
            <Menu
              theme={theme}
              mode="inline"
              defaultSelectedKeys={defaultKeys}
              items={items}
              className="bg-zinc-50 h-full"
            />
          </Sider>
          <Content className="overflow-y-scroll bg-zinc-50">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};