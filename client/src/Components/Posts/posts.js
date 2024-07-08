import React, { useEffect } from "react"
import Post from "./Post/post.js"
import { useSelector, useDispatch } from "react-redux"
import { getPosts } from "../../actions/posts.js"
export default function Posts() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, []);
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
        <>
            <Post />
            <Post />
        </>
    )
}