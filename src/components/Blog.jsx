import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinners from "./Spiners";

export const Blogs=()=>{ 
    const {loading}=useContext(AppContext);
    const {posts}=useContext(AppContext);
    return(<div className="flex flex-col  justify-center w-8/12 mx-auto my-32">
        <div className="flex flex-col items-center">
        {
            loading?
            (<Spinners></Spinners>
                ):
                (
                    posts.length===0?(
                        <div>No Post Found</div>
                    ):(posts.map((post)=>
                         <div key={post.id} className="my-3 gap-2  flex flex-col " >
                            <p className="text-black text-xl font-bold">{post.title}</p>
                            <p>By <span className="font-semibold">{post.author}</span> on <span className="font-semibold underline">{post.category}</span></p>
                            <p>Posted on {post.date}</p>
                            <p>
                                {post.content};
                            </p>
                            <div>{
                                post.tags.map((tag,index)=>{
                                    return <span key={index} className="text-blue-800 mx-1 underline font-semibold text-sm">{`#${tag}`}</span>
                                })
                            }
                            </div>

                        </div>
                    ))
                )


        }
        </div>
    </div>);
}