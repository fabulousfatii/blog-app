import React from 'react'

function BlogCard({blog}) {
  console.log("ggg");
  
    return (
      
            <div className="w-[200px] md:w-[300px] rounded-lg bg-[#cbebdf] overflow-hidden h-[350px]">
  <img
    src={`${blog?.image}`}
    alt="Laptop"
    className="h-[200px] max-sm:h-full w-full rounded-md object-cover p-2"
  />
  <div className="p-4 overflow-y-hidden">
    <h1 className="text-lg font-semibold text-black">{blog.title}</h1>
    <p className="mt-3 text-sm text-black max-sm:hidden">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    
  </div>
</div>

     
    )
}

export default BlogCard
