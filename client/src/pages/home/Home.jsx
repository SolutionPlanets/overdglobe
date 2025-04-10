import React from 'react'
import "./home.scss";
import Posts from "../../components/posts/Posts"
import Banner from "../../components/banner/Banner"

const Home = () => {
  return (
    <div>
      <div className="banner">
      <Banner />
      </div>
    <div className="home">
      
      <Posts/>
    </div>
    </div>
  )
}

export default Home
