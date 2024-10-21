import React from 'react'

function Filter({filterData,category,setCategory}) {

  function filterHandler(title){
     setCategory(title);
  }

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4'>
         {
            filterData.map((data)=>{
              return (<button key={data.id}
                onClick={()=>filterHandler(data.title)}
                      className={`text-lg px-2 py-1 rounded-sm font-medium
                      text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                        ${category === data.title ? "bg-opacity-50 border-white" : "bg-opacity-40 border-transparent"}
                      `}
                      >
                    {data.title}
                    </button>
                    );
            })
         }  
    </div>
  )
}

export default Filter