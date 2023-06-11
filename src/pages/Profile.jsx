import { Avatar, Menu, Typography } from "antd";
import { UserOutlined, LikeOutlined, SolutionOutlined} from '@ant-design/icons';

export const Profile = () => {
    const items = [
        {
          key: '1',
          icon: <SolutionOutlined />,
          label: <span onClick={()=>{console.log('aaa');}}>My posts</span>
        },
        {
          key: '2',
          icon: <LikeOutlined />,
          label: <span>Liked posts</span>
        }
      ];
    return (
        <section className="pt-5 pl-5">
            <Avatar size={92} className="flex items-center justify-center" icon={<UserOutlined />} />
            <Typography.Title level={3} className="mt-5">
                Alex Benzema
            </Typography.Title>
            <Menu mode="horizontal" defaultSelectedKeys={['1']} items={items} className="bg-zinc-50"/>

        </section>
    )
}