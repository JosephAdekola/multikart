import React, { useState } from 'react'
import insta1 from '../assets/images/instaImages/insta1.jpg'
import insta2 from '../assets/images/instaImages/insta2.jpg'
import insta3 from '../assets/images/instaImages/insta3.jpg'
import insta4 from '../assets/images/instaImages/insta4.jpg'

export default function InstagramPosts() {

    const instaPosts = [
        {id: 1, img:insta3},
        {id: 2, img:insta4},
        {id: 3, img:insta1},
        {id: 4, img:insta2},
        {id: 5, img:insta3},
        {id: 6, img:insta4}
    ]
    
    const [hoveredId, setHoveredId] = useState(null)

    // console.log(hoveredId);
    

  return (
    <div className=' py-7 '>
        <h3 className={`text-center text-4xl font-bold my-7`}>
            # INSTAGRAM
        </h3>
        <div className=' grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5
                lg:grid-cols-6 '>
            {
                instaPosts.map((post, index)=>{
                    const isHovered = hoveredId === post.id
                    return(
                        <div key={post.id}
                        className={`${index>2 ? 'hidden' : 'block'}
                                    ${index>3 ? 'sm:hidden' : 'sm:block'}
                                    ${index>4 ? 'md:hidden' : 'md:block'}
                                    ${index>5 ? 'lg:hidden' : 'lg:block'}
                                    relative`}
                        onMouseEnter={()=>setHoveredId(post.id)}
                        onMouseLeave={()=>setHoveredId(null)}>
                            <img src={post.img} alt="" />
                            <div className={`w-full h-full absolute flex bottom-0 bg-[#ff4c3b] overflow-hidden
                                    ${isHovered ? 'opacity-30' : 'opacity-0'} 
                                    transition-opacity duration-700 ease-in-out`}>
                                        <i className={`pi pi-instagram text-[white]
                                            text-5xl my-auto mx-auto 
                                            ${isHovered ? 'rotate-0' : 'rotate-90'} 
                                            ${isHovered ? 'scale-100' : 'scale-400'}
                                            ${!isHovered ? 'opacity-0' : 'opacity-100'}
                                            transition-all duration-700 ease-in-out`} >
                                        
                                        </i>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}