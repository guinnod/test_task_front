import { LikeOutlined, LikeFilled } from '@ant-design/icons';
import Paragraph from 'antd/es/typography/Paragraph';
import { Avatar, Button, List, Popconfirm, Spin } from 'antd';
import useScreenType from 'react-screentype-hook';
import { IconText } from '@components/atoms/IconText';
import { HomeContext } from '@/context/HomeContext';
import { useContext, useState } from 'react';

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
                <IconText icon={isLiked ?
                    <LikeFilled onClick={handleLike} /> :
                    <LikeOutlined onClick={handleLike} />
                }
                    text={item.likes} key="list-vertical-like-o" />,
            ]} >
            <List.Item.Meta
                avatar={< Avatar src={'https://xsgames.co/randomusers/avatar.php?g=pixel&key=0'} />}
                title={<a href={item.href}>{item.title}</a>}
            />
            {isEditable?.paragraph ?? item.text}
            {isEditable?.delete}
        </List.Item>
    );
};

export const EditablePost = ({ item, confirmDelete, confirmEdit }) => {

    const { messageApi } = useContext(HomeContext);
    const [spinning, setSpinning] = useState(false);
    const { isMobile } = useScreenType();

    const updatePost = (value, id) => {
        setSpinning(true)
        let ancient = item.text
        item.text = value
        confirmEdit({ post_pk: id, content: value })
            .then(res => {
                messageApi.success(res.data, 3);
            })
            .catch(err => {
                messageApi.error(err.response.data, 3);
                item.text = ancient
            })
            .finally(() => {
                setSpinning(false);
            })
    }
    const paragraph = <Paragraph editable={{
        onChange: (value) => { updatePost(value, item.pk) }
    }}>
        {item.text}
    </Paragraph>;


    const deleteBlock =
        <div style={{
            position: 'absolute',
            top: isMobile ? 'auto' : 15, right: 20,
            bottom: isMobile ? 15 : 'auto'
        }}>
            <Popconfirm
                title="Confrim"
                description="Delete this post?"
                onConfirm={() => { confirmDelete(item.pk) }}
            >
                <Button size='small' danger>Delete</Button>
            </Popconfirm>
        </div>;

    return (
        <Spin size='large' spinning={spinning}>
            <Post item={item} isLiked={item.isLiked}
                isEditable={{ paragraph: paragraph, delete: deleteBlock }} />
        </Spin>
    );
};