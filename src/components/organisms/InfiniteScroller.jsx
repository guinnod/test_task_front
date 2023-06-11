import { Post } from "@components/molecules/Post";
import { List } from "antd";


export const InfiniteScroller = ({posts}) => {
    
    return (
        <List
            itemLayout="vertical"
            className="px-10 pt-5"
            dataSource={posts}
            renderItem={(item) => (<Post item={item} />)}
        />
    );
};