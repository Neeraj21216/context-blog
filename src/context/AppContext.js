import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext=createContext();
//this children inside provider means the children of file in which appcontext tag is w
//is written just see app.js ,talk is of that 
export default function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState("");
    const [page,setPage]=useState(1);
    const [totalpage,setTotalpage]=useState(null);
    //data filling  using api
    async function fetchBlogPosts (page=1) {
        setLoading(true);
        let url=`${baseUrl}?page=${page}`;
        try{
            const result=await fetch(url);
            const data=await result.json();
            // console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalpage(data.totalPages);

        } catch (e) {
          console.log("error is ther in apii");   
        }
        setLoading(false);
        
    }
    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }
    //value is a object data where all required data is present 
    const value={
         posts,
         setPosts,
         loading,setLoading,
         page,setPage,
         totalpage,setTotalpage,
         handlePageChange,
         fetchBlogPosts
    };
    return   <AppContext.Provider value={value}>
    {children}
    {/* iska mtlb ye h ki jo children h  appcontext ka use ye value provide kr do */}
</AppContext.Provider>;

}
