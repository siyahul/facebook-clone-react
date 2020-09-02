import React,{useState} from 'react'
import './MessageSender.css'
import './bootstrap.css'
import {Avatar} from '@material-ui/core'
import VideoCamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import {useStateValue} from './StateProvide.js';
import db from './firebase.js';
import firebase from 'firebase';


function MessageSender() {
    const [{user},dispatch] = useStateValue();
    const [input,setInput] = useState('')
    const [imageUrl,setImageUrl] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput('');
        setImageUrl('');
    };
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input value={input} onChange={(e)=> setInput(e.target.value )} className="messageSender__input" placeholder= {`Whats on your mind, ${user.displayName}?`} type="text" />
                    <input value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)}className="messageSender__input" placeholder="image URL (optional)" type="text" />
                    <button onClick={handleSubmit} className="btn btn-primary" type="submit" >Submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideoCamIcon style={{color:"red"}}/>
                    <h3>Video Live</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:"yellow"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
