import { useState,useEffect,useContext } from "react"
import arrow from '../images/right.png'
import TovarCard from './TovarCard'
import {observer} from 'mobx-react-lite'
import {Context} from'../index'
function NewTovar() {
    const [array,setArray] = useState([])
    const [step,setStep] = useState(0)
    const {store} = useContext(Context)
    useEffect(()=>{
        if(store.tovarArray.length == 0) {
            store.getTovarArray()
        } else {
            const arr = [];
            for(let i = 0;i < 12;i++) {
                arr[i] = store.tovarArray[i]
            }
            setArray(arr)
        }
    },[store.tovarArray])
    function toStep(x) {
        if(step > 5) setStep(5)
        else if(step < 1) setStep(1)
        else setStep(step + x)
        
    }
  return (
    <div className="new_tovar block" style={{paddingLeft:'-200px'}}>
        <button className='button_arrow' onClick={()=>{toStep(-1)}}><img src={arrow} alt="<-" /></button>
        <button className='button_arrow' onClick={()=>{toStep(1)}}><img src={arrow} alt="->" /></button>
        <div className="card_body" style={{marginLeft:(-300 * step + 10) +'px'}}>
            {array.map((card,i) =>{
                return <TovarCard step={step} key={'tovarNew' + i} card={card}/>
            })}
        </div>   
    </div>
  )
}

export default observer(NewTovar)