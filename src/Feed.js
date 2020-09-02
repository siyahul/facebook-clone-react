import React, {useState,useEffect} from 'react'
import './feed.css'
import StoryReel from './StoryReel.js'
import MessageSender from './MessageSender.js'
import Post from './Post.js'
import db from './firebase.js'


function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').
        orderBy('timestamp','desc').
        onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc)=>({id: doc.id,data: doc.data()})))
        );},[]);
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map(post =>(
                <Post
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image} />
            ))}
            </div>
    );
}
export default Feed