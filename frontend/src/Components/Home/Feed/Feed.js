import React from 'react'
import './Feed.css'
import Tweetbox from './TweetBox/Tweetbox'
import { Avatar } from '@mui/material'
import Post from './Post/Post'

const Feed = () => {
    return (
        <div className='feed'>
            <header className='feed__header'>
                <h2 className='foryou'>For you</h2>
                <h2 className='follow '>Following</h2>
            </header>
            <Tweetbox />
            <Post />
            <Post />
            <Post />



        </div>
    )
}

export default Feed