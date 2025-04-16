import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  let [title, setTitle]=useState('') //welcome back

  let [movies, setMovies]=useState([])
  let getMovies=()=>{
    let apiUrl;
    if(title==''){
      apiUrl=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
    }
    else{
      apiUrl=`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${title}`
    }
    axios.get(apiUrl)
    .then((res)=>setMovies(res.data.results))
    
  }
  
 useEffect(()=>{
  getMovies()
 },[title])


 let getTextvalue=(event)=>{
    setTitle(event.target.value) //welcome
    //setTitle('welcome)
 }

  return (
    <>
   
    
      <h1 className='text-3xl text-center font-bold py-5 text-white'>Movie App</h1>
      <form action="" className='max-w-[1170px] mx-auto'>
        <input onChange={getTextvalue}   type="text" className='p-4 h-[50px] rounded-[20px] border-2 w-[100%] text-white' placeholder='Enter Movie Title' />
      </form>

      <div className='max-w-[1320px] mt-5 mx-auto grid grid-cols-4 gap-5'>
        {
        movies.length>=1
        ?
        movies.map((items,index)=> <MovieItems data={items} key={index}/> )
            
        :
          <div className='text-center text-white'>
            <img src="https://media.tenor.com/1Y8jz3h3k1IAAAAC/loading.gif" alt="" />
            <h1 className='text-2xl font-bold'>No Data Found</h1>
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
