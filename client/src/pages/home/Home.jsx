import React from 'react'
import "./home.scss";
import Posts from "../../components/posts/Posts"
import Banner from "../../components/banner/Banner"
import Share from "../../components/share/Share"

const Home = () => {
  return (
    <div>
      <div className="banner">
      <Banner />
      </div>
    <div className="home">
      <Share />
      <Posts/>
    </div>
    </div>
  )
}

export default Home
