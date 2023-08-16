import { useParams } from "react-router";
import LayoutPage from "./LayoutPage";
import { useEffect, useState } from "react";


function PagePost() {
    const [post, setPost] = useState({});
    const [coments, setComments] = useState([]);
    const { postId } = useParams();

    async function getPost(thePostId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${thePostId}/`);
        const responseJson = await response.json();
        setPost(responseJson);
    }

    async function getComments(thePostId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${thePostId}/comments`);
        const responseJson = await response.json();
        setComments(responseJson);
    }

    useEffect(() => {
        getPost(postId);
        getComments(postId);
    }, [postId]);

    const commentElements = coments.map((comment) => {
        return (
            <div key={comment.id}>
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
                <hr />
            </div>
        )
    });


    return (
        <LayoutPage>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
            <h4>{coments.length} comments</h4>
            {commentElements}
        </LayoutPage>
    );
}

export default PagePost;