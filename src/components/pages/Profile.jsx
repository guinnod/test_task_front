import { Avatar, List, Menu, Typography, message } from "antd";
import { UserOutlined, LikeOutlined, SolutionOutlined } from '@ant-design/icons';
import { EditablePost, Post } from "@components/molecules/Post";
import useScreenType from "react-screentype-hook";
import { deletePost, getUserPosts } from "@api/postAPI";
import { useContext, useEffect, useState } from "react";
import { HomeContext } from "@/context/HomeContext";
export const Profile = () => {
  const items = [
    {
      key: '1',
      icon: <SolutionOutlined />,
      label: <span>My posts</span>
    },
    {
      key: '2',
      icon: <LikeOutlined />,
      label: <span>Liked posts</span>
    }
  ];

  const { myPosts, setMyPosts } = useContext(HomeContext);
  useEffect(() => {
    getUserPosts()
      .then(res => {
        setMyPosts(res.data)
      })
      .catch(err => {

      })
  }, [])
  const { isMobile } = useScreenType();
  const [messageApi, contextHolder] = message.useMessage();
  const confirmDelete = (id) => {
    deletePost({post_pk: id})
    .then(res=> {
      setMyPosts(res.data)
    })
    .catch(err=> {
      
    })
  }
  
  return (
    <section className="pt-5 px-5 overflow-y-scroll max-h-full">
      {contextHolder}
      <Avatar size={92} className="flex items-center justify-center" icon={<UserOutlined />} />
      <Typography.Title level={3} className="mt-5">
        Alex Benzema
      </Typography.Title>
      <Menu mode="horizontal" defaultSelectedKeys={['1']} items={items} className="bg-zinc-50" />
      <List
        itemLayout="vertical"
        className={`pt-5 ${isMobile ? 'px-0' : 'px-10'}`}
        dataSource={myPosts}
        renderItem={(item) => (<EditablePost item={item} confirmDelete={confirmDelete}/>)}
      />
    </section>
  )
}