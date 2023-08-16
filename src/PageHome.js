import { useEffect, useState } from "react";
import LayoutPage from "./LayoutPage";
import { Link } from "react-router-dom";


function PageHome() {
    const [posts, setPost] = useState([]);

    async function getPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const responseJson = await response.json();
        setPost(responseJson);
    }

    useEffect(() => {
        getPosts();
    }, []);

    const postElements = posts.map((post) => {
        return (
            <div key={post.id}>
                <h4>
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                </h4>
                <p>{post.body}</p>
                <hr />
            </div>
        )
    })

    return (
        <LayoutPage>
            <h2>Home หน้าแรกของหมู่เฮา</h2>
            {postElements}
        </LayoutPage>
    );
}

export default PageHome;