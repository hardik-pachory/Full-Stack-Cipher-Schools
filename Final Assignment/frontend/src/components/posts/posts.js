import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getComments, getPosts } from '../../service/api';
const AllPosts = () => {
    const [posts, setPosts, setComments] = useState([]);
    
    useEffect(() => {
        getAllPosts();
    }, []);
    const getAllPosts = async () => {
        let response = await getPosts();
        setPosts(response.data);
    }
    const getPostComments = async (id) => {
        let response = await getComments(id);
        setComments(response.data);
    }
    return (
        <div className="container">
            {posts.map((posts)=>(
            <div className="card border-info m-5 hotCard">
                <div className="card-header">
                   Title : {posts.title}
                </div>
                <div className="card-body">
                    <h5 className="card-title">ID : {posts.id}</h5>
                    <p className="card-text">Comment : {posts.body}</p>
                    <button onClick={() => getPostComments(posts.userId)} componet={Link} to="/posts/comments">Comments</button>
                </div>
            </div>
            ))}
        </div>
    )
}

export default AllPosts;