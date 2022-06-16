import LazyLoad from 'react-lazyload';
export default function LazyImg({url}) {
    return (   
        <LazyLoad className='img' placeholder='xz'><img src={url}/></LazyLoad>
    )
}