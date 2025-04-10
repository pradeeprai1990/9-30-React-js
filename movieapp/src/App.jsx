import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count1, setCount1] = useState(1)
  const [count2, setCount2] = useState(1)
  let a=10
  let [movies, setMovies]=useState([])
  let getMovies=()=>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`)
    .then((res)=>setMovies(res.data.results))
    
  }
  
 useEffect(()=>{
  getMovies()
 },[])
// [] Blank Array-> getMovies() Run Once

//[count1] -> getMovies() Run when count1 changes
  return (
    <>
   
      <button className='bg-white p-3 m-2' onClick={()=>setCount1(count1+1)}>Change Counter {count1}  </button>
      <button  className='bg-white p-3 m-2' onClick={()=>setCount2(count2+1)}>Change Counter {count2} </button>

      <h1 className='text-3xl text-center font-bold py-5 text-white'>Movie App</h1>
      <form action="" className='max-w-[1170px] mx-auto'>
        <input type="text" className='p-4 h-[50px] rounded-[20px] border-2 w-[100%] text-white' placeholder='Enter Movie Title' />
      </form>

      <div className='max-w-[1320px] mt-5 mx-auto grid grid-cols-4 gap-5'>
        {
        movies.length>=1
        ?
        movies.map((items)=> <MovieItems data={items}/> )
           
        :
          <div className='text-center text-white'>
            <img src="https://media.tenor.com/1Y8jz3h3k1IAAAAC/loading.gif" alt="" />
            <h1 className='text-2xl font-bold'>Loading...</h1>
          </div>          
        }
        
       
      </div>
    </>
  )
}

export default App


function MovieItems({data}){
  let {title,poster_path,overview}=data
  return(
    <div className='bg-white'>
          <div className='relative group'>
            <img src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} alt="" />
            <div className='absolute w-[100%] h-[100%] duration-300 bg-yellow-500 top-0 scale-[0] group-hover:scale-[1] flex items-center justify-center p-5'>
              {overview}
             
            </div>
          </div>
          <h1 className='text-xl font-bold text-center py-3'>
            {title}
          </h1>
        </div>
  )
}
