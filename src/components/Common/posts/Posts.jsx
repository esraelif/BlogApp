import React from "react";
import Loading from "../../loading/Loading";
import PostsCard from "./PostCard";
import { Blog } from "../../../Context/Context";

const Posts = () => {
    const { postData, postLoading } = Blog();
    console.log("post");

    return (
        <section className="flex flex-col gap-[2.5rem]">
            {postLoading ? (
                <Loading />
            ) : (
                postData &&
                postData?.map((post, i) => <PostsCard post={post} key={i} />)

            )}

        </section>
    );
};

export default Posts;
