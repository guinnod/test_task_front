import { InfiniteScroller } from "@components/organisms/InfiniteScroller"
import Search from "antd/es/input/Search";


export const Home = () => {
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
        }, {
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
        <main>
            <div className="mx-10 mt-5 max-w-lg">
                <Search
                    enterButton size="large"
                    placeholder="Search for posts"
                    className="w-full max-w-96"
                    />
            </div>
            <InfiniteScroller posts={posts} />
        </main>
    )
}