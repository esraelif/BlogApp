import React from "react";
import Loading from "../../../loading/Loading";
import PostsCard from "../../../Common/posts/PostCard";
import { Blog } from "../../../../Context/Context";

const ProfileHome = ({ getUserData }) => {
    const { postData, postLoading } = Blog();
    const userPost =
        postData &&
        postData?.filter((post) => post?.userId === getUserData?.userId);

    return (
        <div className="flex flex-col gap-5 mb-[4rem]">
            {userPost.length === 0 && (
                <p className="text-gray-500">
                    <span className="capitalize">{getUserData?.username}</span> has no
                    posts
                </p>
            )}
            {postLoading ? (
                <Loading />
            ) : (
                userPost &&
                userPost?.map((post, i) => <PostsCard post={post} key={i} />)
            )}
        </div>
    );
};

export default ProfileHome;
