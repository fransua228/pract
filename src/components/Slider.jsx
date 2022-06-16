import arrow from '../images/right.png'
import { useRef } from 'react';
import LazyImg from './LazyImg'
export default function Slider() {
    const inputs = []
    inputs[0] = useRef(null)
    inputs[1] = useRef(null)
    inputs[2] = useRef(null)
    inputs[3] = useRef(null)
    const swapX = () => {
        for (let i = 0; i < 4;i++) {
            if(inputs[i].current.checked) {
                let a = i-1;
                if(a >= 0) inputs[a].current.checked = true
                else{
                    inputs[3].current.checked = true
                    break
                } 
            }
        }
    }
    const swapY = () => {
        for (let i = 3; i >= 0;i--) {
            if(inputs[i].current.checked) {
                let a = (i+1);
                if(a <= 3) inputs[a].current.checked = true
                else {
                    inputs[0].current.checked = true
                    break
                }
            }
        }
    }
    const urls = x => {
        let arr = []
        for(let i = 1;i <= x;i++) {
            arr.push('http://localhost:5000'+ '/image/news/news' + (x-i) + '.png')
        }
        return arr
    }
    return(
        <div className="slider block">
            <button className='left' onClick={() => {swapX()}}><img src={arrow} alt="<-" /></button>
            <button className='right' onClick={() => {swapY()}}><img src={arrow} alt="->" /></button>
            <input ref={inputs[0]} type="radio" name='check' id='input1' />
            <input ref={inputs[1]} type="radio" name='check' id='input2' />
            <input ref={inputs[2]} type="radio" name='check' id='input3' />
            <input ref={inputs[3]} type="radio" name='check' id='input4' defaultChecked/>
            <div className='radio-box'>
                <label htmlFor="input1"></label><label htmlFor="input2"></label>
                <label htmlFor="input3"></label><label htmlFor="input4"></label>
            </div>
            <div className="slider_xz">
                {urls(4).map((url,i) => {
                    return <LazyImg key={'news' + i} url={url}/>
                })}   
            </div>
        </div>
    )
}