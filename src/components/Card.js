import React from 'react'
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import {toast} from 'react-toastify'

function Card({course,likedCourses,setLikedCourses}) {

 function clickHandler(){
    if(likedCourses.includes(course.id)){
      //already liked
      setLikedCourses((prev)=> prev.filter((cid)=>(cid !== course.id)));
      toast.warn("like removed");
    }
    else{
        if(likedCourses.length===0){
           setLikedCourses([course.id]);
        }
        else{
          setLikedCourses((prev)=>
            [...prev,course.id]
          )
        }
        toast.success("Liked successfully");
    }
 }

  return (
    <div className='flex flex-col flex-wrap w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden p-3'>
         <div className='relative'>
            <img src={course.image.url} alt={course.image.alt}></img>
        
           <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3 grid 
            place-items-center'>
               <button onClick={clickHandler} >
                        {
                           likedCourses.includes(course.id) ?(<FcLike fontSize='1.75rem'/>):(<FcLikePlaceholder fontSize='1.75rem' />)
                        } 
               </button>
           </div>
         </div>
         
         <div className='py-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='text-white mt-2'>
               {
                 `${course.description.substring(0,100)}....`
               }
            </p>
         </div>

    </div>
  )
}

export default Card