import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Pagination=()=>{
    const {page,handlePageChange,totalpage}=useContext(AppContext);
    console.log(page);
    console.log(totalpage);
    return(<div className="my-0 flex justify-between  py-4 bg-blue-400   fixed bottom-0 w-full border-t-2 border-pink-400">
        <div className="mx-64">
        {   
            page>1 &&
            (<button onClick={()=>handlePageChange(page-1) } className="border-white border-2 px-4 py-2 rounded ">Previous</button>)
        }
         {
            page<totalpage && 
            <button onClick={()=>handlePageChange(page+1)} className="border-white border-2 px-4 py-2 rounded mx-2">Next</button>
        }
        </div>
        <div>
            <p className="mr-96">Page <span>{page}</span> of <span>{totalpage}</span></p>
        </div>
    </div>);
}