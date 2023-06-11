import { LikeOutlined, LikeFilled } from '@ant-design/icons';
import { Avatar, Button, List, Popconfirm, Spin } from 'antd';
import { IconText } from '@components/atoms/IconText';
import Paragraph from 'antd/es/typography/Paragraph';
import { useState } from 'react';

export const Post = ({ item, toogleLike }) => {
    return (
        <List.Item
            key={item.title}
            actions={[
                <IconText icon={item.isLiked ? <LikeFilled onClick={toogleLike} /> :
                    <LikeOutlined onClick={toogleLike} />} text={item.likes} key="list-vertical-like-o" />,
            ]} >
            <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
            />
            {item.content}
        </List.Item>
    );
};

export const EditablePost = ({ item }) => {
    const confirm = () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(null), 3000);
        });
    const [spinning, setSpinning] = useState(false)
    const deletePost = () => {
        setSpinning(true)
        setTimeout(() => { setSpinning(false) }, 3000)
    }
    const [isLiked, setIsLiked] = useState(item.isLiked);
    const handleLike = () => {
        item.isLiked = !item.isLiked;
        setIsLiked(item.isLiked);
    }
    return (
        <Spin size='large' spinning={spinning}>
            <List.Item
                style={{ position: 'relative' }}
                key={item.title}
                actions={[
                    <IconText icon={isLiked ? <LikeFilled onClick={handleLike} /> :
                        <LikeOutlined onClick={handleLike} />} text={item.likes} key="list-vertical-like-o" />,
                ]} >
                <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                />
                <Paragraph editable={{
                    onEnd: () => { deletePost(); }
                }}>{item.content}</Paragraph>
                <div style={{ position: 'absolute', top: 15, right: 20 }}>
                    <Popconfirm
                        title="Confrim"
                        description="Delete this post?"
                        onConfirm={confirm}
                        onOpenChange={() => console.log('open change')}
                    >
                        <Button size='small' danger>Delete</Button>
                    </Popconfirm>
                </div>
            </List.Item>
        </Spin>
    );
};