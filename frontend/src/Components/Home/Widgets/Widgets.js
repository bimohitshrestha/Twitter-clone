import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import { TwitterMentionButton, TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed, } from 'react-twitter-embed';
import { MoreHoriz } from '@mui/icons-material';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <SearchIcon className='widgets__searchicon' />
                <input placeholder='Search' type='text' />
            </div>
            <div className='widgets__container'>
                <h2>What's Happening</h2>
                <TwitterTweetEmbed
                    tweetId={'1560073084220379136'}
                />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="ShresthaBimohit"
                    options={{ height: 600 }}
                />

                <TwitterShareButton
                    url={'https://www.facebook.com/bimohitShrestha/'}
                    options={{ text: '#reactjs is awesome', via: 'ShresthaBimohit' }}
                />

            </div>



        </div>
    )
}

export default Widgets