import React,{useState,useEffect} from "react";
import NavBar from './components/NavBar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import {apiUrl,filterData} from './data'
import {toast} from 'react-toastify'
import Spinner from "./components/Spinner";


const App = () => {

  const [courses,setcourses] = useState([]);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);
 

  useEffect(()=>{
   setLoading(true);
     const fetchData = async ()=>{
         try{
          const res = await fetch(apiUrl);
          const output = await res.json();
          setcourses(output.data);
          console.log(output.data);
         }
         catch(err){
           toast.error("something went Wrong");
         }
     }
     fetchData();
     setLoading(false);
  },[]);


  return( 
         <div className="flex flex-col min-h-screen bg-bgDark2">
             
             <div>
               <NavBar/>
             </div>

            <div className="">
               <div>
                  <Filter filterData={filterData}
                          category={category}
                          setCategory={setCategory}
                  />
               </div>
               <div className='flex flex-warp w-11/12 max-w-[1200px] mx-auto justify-center items-center min-h-[50vh]'>
                     {
                        loading ? (<Spinner/>) :(<Cards courses={courses} category={category}/>)
                     }
               </div>
               </div>
         </div>
  );
};

export default App;
