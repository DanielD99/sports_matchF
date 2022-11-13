import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Homepage</h1>
        <Link to="/search"><h3>Find Movie!</h3></Link>
        <Outlet/>
    </div>
  )
}

export default Home
