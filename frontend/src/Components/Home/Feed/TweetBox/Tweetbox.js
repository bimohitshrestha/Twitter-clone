import React from 'react'
import { Avatar } from "@mui/material"
import './Tweetbox.css'
import { CalendarTodayOutlined, GifBoxOutlined, ImageOutlined, LocationOnOutlined, PollOutlined, SentimentSatisfied } from '@mui/icons-material'
const Tweetbox = () => {
    return (
        <div className='tweetbox'>
            <form className='tweetbox__form'>
                <Avatar src='./waynerooney.jpeg' className='tenhag' />
                <div className='tweetbox__form-field'>
                    <div className='tweetbox__input'>
                        <input type='text' placeholder="What's happening?" />
                    </div>
                    <div className='tweetbox__input'>
                        <div className='tweetbox__icons'>
                            <ImageOutlined className='tweetbox_icon' />
                            <GifBoxOutlined className='tweetbox_icon' />
                            <PollOutlined className='tweetbox_icon' />
                            <SentimentSatisfied className='tweetbox_icon' />
                            <CalendarTodayOutlined className='tweetbox_icon' />
                            <LocationOnOutlined className='tweetbox_icon' />

                        </div>
                        <button className='tweetbox__btn'>Post</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Tweetbox