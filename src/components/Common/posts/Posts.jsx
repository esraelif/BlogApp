import React from "react";
import Loading from "../../loading/Loading";
import PostCard from "./PostCard";
import { Blog } from "../../../Context/Context";

const Posts = () => {
    const { postData, postLoading } = Blog();
    console.log("post");

    return (
        // <section className="flex flex-col gap-[2.5rem]">
        //     {postLoading ? (
        //         <Loading />
        //     ) : (
        //         postData &&
        //         postData?.map((post, i) => <PostCard post={post} key={i} />)

        //     )}

        // </section>
        <section className="flex flex-col gap-[2.5rem]">
            {postLoading ? (
                <Loading />
            ) : (
                postData && postData.length > 0 ? (
                    postData.map((post, i) => <PostCard post={post} key={i} />)
                ) : (
                    <div>Henüz herhangi bir gönderi yok</div>
                )
            )}

        </section>
    );
};

export default Posts;
