import React,{useState} from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core'
import VideoCamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

function MessageSender() {
    const [input,setInput] = useState('')
    const [imageUrl,setImageUrl] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setInput('');
        setImageUrl('');
    };
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input value={input} onChange={(e)=> setInput(e.target.value )} className="messageSender__input" placeholder="Whats on your mind?" type="text" />
                    <input value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)}className="messageSender__input" placeholder="image URL (optional)" type="text" />
                    <button onClick={handleSubmit} type="submit" />
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
