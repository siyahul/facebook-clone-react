import React from 'react'
import './feed.css'
import StoryReel from './StoryReel.js'
import MessageSender from './MessageSender.js'
import Post from './Post.js'
function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic="https://scontent.fcok1-1.fna.fbcdn.net/v/t1.0-9/75407813_3091412370977438_3580795328308598472_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=Fkuv5cnBR6EAX-U3XEF&_nc_ht=scontent.fcok1-1.fna&oh=483e478f135e4bd1a6c39e148f563e19&oe=5F738E56"
                message="Wow this works"
                timestamp="This is a timestamp"
                username="Siyahul haq"
                image="https://scontent.fcok1-1.fna.fbcdn.net/v/t1.0-9/90541905_2827298087388869_9195459774542512128_o.jpg?_nc_cat=104&_nc_sid=174925&_nc_ohc=02VxZ0cx6lwAX8A9FjR&_nc_ht=scontent.fcok1-1.fna&oh=214f87fd9027e233193cb59dd0bb57b7&oe=5F7101EB"
            />
        </div>
    )
}

export default Feed
