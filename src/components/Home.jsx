import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Homepage</h1>
        <Link to="/allmatches"><h3>Find Match!</h3></Link>
        <Outlet/>
    </div>
  )
}

export default Home
