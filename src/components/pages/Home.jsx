import { InfiniteScroller } from "@components/organisms/InfiniteScroller"
import { useEffect, useState } from "react"
import axiosApi from "@/services/axios";

export const Home = () => {
    const [mp, setMp] = useState(0);
    useEffect(()=> {
        axiosApi.get('mp').then(res=>{setMp(res.data.res); console.log(mp);})
        
    }, [])
    return (
        <main className="max-h-full overflow-y-scroll">
            <div className="mx-10 mt-5 max-w-lg">
            </div>
            <InfiniteScroller  posts={mp} />
        </main>
    )
}