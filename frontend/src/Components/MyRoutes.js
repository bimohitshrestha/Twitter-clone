import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'

const MyRoutes = () => {
    return (
        <Router>
            <div className='app'>
                <Routes>
                    <Route path='/' element={<Home />}></Route>

                </Routes>
            </div>
        </Router>
    )
}

export default MyRoutes