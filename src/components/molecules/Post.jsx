import { LikeOutlined, LikeFilled } from '@ant-design/icons';
import { Avatar, Button, List, Popconfirm, Spin } from 'antd';
import { IconText } from '@components/atoms/IconText';
import Paragraph from 'antd/es/typography/Paragraph';
import { useState } from 'react';
import useScreenType from 'react-screentype-hook';

export const Post = ({ item, isEditable }) => {
    const [isLiked, setIsLiked] = useState(item.isLiked);
    const handleLike = () => {
        item.isLiked = !item.isLiked;
        setIsLiked(item.isLiked);
    }
    return (
        <List.Item
            key={item.title}
            style={{ position: 'relative' }}
            actions={[
                <IconText icon={isLiked ? <LikeFilled onClick={handleLike} /> :
                    <LikeOutlined onClick={handleLike} />}
                    text={item.likes} key="list-vertical-like-o" />,
            ]} >
            <List.Item.Meta
                avatar={< Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
            />
            {isEditable?.paragraph ?? item.content}
            {isEditable?.delete}
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
    const paragraph = <Paragraph editable={{
        onEnd: () => { deletePost(); }
    }}>{item.content}</Paragraph>;
    const { isMobile } = useScreenType();

    const deleteBlock =
        <div style={{
            position: 'absolute',
            top: isMobile ? 'auto' : 15, right: 20,
            bottom: isMobile ? 15 : 'auto'
        }}>
            <Popconfirm
                title="Confrim"
                description="Delete this post?"
                onConfirm={confirm}
                onOpenChange={() => console.log('open change')}
            >
                <Button size='small' danger>Delete</Button>
            </Popconfirm>
        </div>;
    return (
        <Spin size='large' spinning={spinning}>
            <Post item={item} isLiked={item.isLiked} isEditable={{ paragraph: paragraph, delete: deleteBlock }} />
        </Spin>
    );
};