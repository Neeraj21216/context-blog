import React, { useContext, useEffect } from 'react'
import { Blogs } from './components/Blog'
import { Pagination } from './components/pagination'
import { Header } from './components/header'
import { AppContext } from './context/AppContext'
import './App.css';



export const App = () => {
  const {fetchBlogPosts}=useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts();
  },[])
  return (
    <div >
      <Header>  </Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  )
}

export default App