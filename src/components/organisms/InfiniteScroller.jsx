import { Post } from "@components/molecules/Post";
import { List, Pagination } from "antd";
import { useEffect, useState } from "react";
import { allPosts } from "@api/postAPI";


export const InfiniteScroller = ({mp}) => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const fetchData = (num) => {
        allPosts({
            params: {
                page: num,
                page_size: 3
            }
        })
        .then(res => {
            setPosts(res.data.results)
        })
        .catch(err => {

        })
    }
    useEffect(()=> {
        fetchData(1);
    }, [])

    return (
        <div onClick={()=>{setPage(page+1)}}>
        <List
            itemLayout="vertical"
            className="px-10 pt-5"
            dataSource={posts}
            renderItem={(item) => (<Post item={item} />)}
        />
        <Pagination className="mt-5 ml-5" pageSize={3} onChange={(page)=> {fetchData(page);}} defaultCurrent={page} total={12}/>
        </div>
    );
};