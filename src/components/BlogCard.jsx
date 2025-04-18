import React from 'react'

function BlogCard({blog}) {
  console.log("ggg");
  
    return (
      
            <div className="w-[200px] md:w-[300px] rounded-lg bg-[#cbebdf] overflow-hidden h-[350px]">
  <img
    src={`${blog?.image}`}
    alt="Laptop"
    className="md:h-[200px]  w-full rounded-md object-cover p-2"
  />
  <div className="p-4 ">
    <h1 className="text-lg font-semibold text-black">{blog.title}</h1>
    <p className="mt-3 text-sm text-black ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    
  </div>
</div>

     
    )
}

export default BlogCard
