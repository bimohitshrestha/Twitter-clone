import React from 'react'
import './Slidebar.css'
import { Bookmark, Home, List, Message, More, NotificationAdd, PermIdentity, PostAdd, PostAddRounded, Search, Twitter } from '@mui/icons-material'
import SlidebarOption from './SlidebarOption/SlidebarOption'
import { Button } from '@mui/material'


const Slidebar = () => {
    return (
        <div className='slidebar'>
            <Twitter className='slidebar_twitter-icon' />
            <SlidebarOption active Icon={Home} text="Home" />
            <SlidebarOption active Icon={Search} text="Explore" />
            <SlidebarOption active Icon={NotificationAdd} text="Notification" />
            <SlidebarOption active Icon={Message} text="Messages" />
            <SlidebarOption active Icon={List} text="Lists" />
            <SlidebarOption active Icon={Bookmark} text="Bookmarks" />
            <SlidebarOption active Icon={PermIdentity} text="Profile" />
            <SlidebarOption active Icon={More} text="More" />

            <Button className='slidebar__tweet-btn' variant='outlined' Icon={PostAddRounded} >
                Tweet
            </Button>


        </div>
    )
}

export default Slidebar