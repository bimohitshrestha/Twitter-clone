import React from 'react'
import "./Home.css"
import Slidebar from './Slidebar/Slidebar'
import Feed from './Feed/Feed'
import Widgets from './Widgets/Widgets'


const Home = () => {
    return (
        <div className='home'>
            {/*Slidebar*/}
            <Slidebar />



            {/* Feed */}
            <Feed />


            {/**Widgets */}
            <Widgets />

        </div>
    )
}

export default Home