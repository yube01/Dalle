import React, { useEffect } from 'react'
import "./home.css"

import { useState } from 'react'
import Card from '../../components/Card/Card';
const Home = () => {

    const [ loading, setLoading] = useState(false);
    const [ allPost , setAllPost] = useState(null)
    const [searchText , setSearchText] = useState("")

    const RenderCards =({data , title})=>{
        if(data?.length >0 )
        return data.map((post)=>{
            <Card key={post._id} {...post} />
        })
        return(
            <h2 className='picTitle'>
                {title}
            </h2>
        )
    }

    


  return (
    <div className='home'>
        <div className="title">
        The Community Showcase
        </div>
        <div className="loader">
            {
                loading ?
                ( <>
                loading
                </>):
            (  <>
            {searchText && (
                <h2>
                    Searching result for <span> { searchText} </span>
                </h2>
            )}
            <div className="image">
                {searchText ?(
                    <RenderCards
                    data={[]}
                    title="Result not found"
                    />
                ):(
                    <RenderCards
                    data={[]}
                    title="No post found"/>
                )}


            </div>
            </>)
            }
        </div>
    </div>
  )
}

export default Home