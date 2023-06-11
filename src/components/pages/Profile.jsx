import { Avatar, List, Menu, Typography } from "antd";
import { UserOutlined, LikeOutlined, SolutionOutlined } from '@ant-design/icons';
import { EditablePost, Post } from "@components/molecules/Post";

export const Profile = () => {
  const items = [
    {
      key: '1',
      icon: <SolutionOutlined />,
      label: <span onClick={() => { console.log('aaa'); }}>My posts</span>
    },
    {
      key: '2',
      icon: <LikeOutlined />,
      label: <span>Liked posts</span>
    }
  ];
  const posts = [
    {
      title: `ant design part`,
      avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=0`,
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
      title: `ant design part`,
      avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=0`,
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
      title: `ant design part`,
      avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=0`,
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
      title: `ant design part`,
      avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=0`,
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
  ];
  return (
    <section className="pt-5 px-5">
      <Avatar size={92} className="flex items-center justify-center" icon={<UserOutlined />} />
      <Typography.Title level={3} className="mt-5">
        Alex Benzema
      </Typography.Title>
      <Menu mode="horizontal" defaultSelectedKeys={['1']} items={items} className="bg-zinc-50" />
      <List
        itemLayout="vertical"
        className="px-10 pt-5"
        dataSource={posts}
        renderItem={(item) => (<EditablePost item={item} />)}
      />
    </section>
  )
}