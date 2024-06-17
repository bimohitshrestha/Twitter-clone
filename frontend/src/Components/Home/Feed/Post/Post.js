import React from 'react'
import './Post.css'
import { BarChartOutlined, BookmarkBorder, CommentRounded, FavoriteBorder, IosShare, MoreHorizSharp, Repeat } from '@mui/icons-material'
import { Avatar } from '@mui/material'

const Post = () => {
    return (
        <div className='post'>
            <Avatar src='./maino.jpeg' className='maino' />

            <div className='post__content'>
                <div className='post__header'>
                    <div className='post__title'>

                        <h3 >Mainoo</h3>
                        <h4>@mainoo37 </h4>
                        <h4> .6h</h4>
                    </div>

                    <MoreHorizSharp className='post__option' />

                </div>
                <div className='post__description'>
                    Glory Glory Man United
                </div>
                <div className='post__media'>
                    <img src='./carrington.jpg' />
                </div>

                <div className='post__footer'>
                    <CommentRounded fontSize='small' />
                    <Repeat fontSize='small' />
                    <FavoriteBorder fontSize='small' />
                    <BarChartOutlined fontSize='small' />
                    <BookmarkBorder fontSize='small' />
                    <IosShare />
                </div>



            </div>


        </div>





    )
}

export default Post