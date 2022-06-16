import { useState } from "react"
import LazyLoad from 'react-lazyload';
export default function LazyImg({url}) {
    const [error,setError] = useState(false)
    function Err() {
        if(error) return <div className="error"><span>Err<i className='fas fa-skull'></i>r</span></div>
        else return <img src={url} onError={() => {setError(true)}}/>
    }
    return (   
        <LazyLoad className='img' placeholder='xz'><Err/></LazyLoad>
    )
}