
export  const card=()=>{
    return (<div className="">
        <p className="text-black text-3xl font-bold">{posts.title}</p>
        <p>By <span>{posts.author}</span> on <span>{posts.category}</span></p>
        <p>Posted on {posts.date}</p>
        <p>
            {posts.content};
        </p>
        <div>{
            poast.tags.map((tag,index)=>{
                return <span key={index}>{`#${tag}`}</span>
            })
        }
        </div>

    </div>);
}