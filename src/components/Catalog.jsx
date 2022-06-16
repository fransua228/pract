import { useContext,useState,useEffect } from "react"
import { useParams} from "react-router-dom"
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import TovarCard from "./TovarCard"
export default observer (function Catalog() {
    const {store} = useContext(Context)
    const [array,setArray] =useState([])
    const [visible,setVisible] = useState([])
    let {type,sort} = useParams()
    useEffect(()=>{
      if(store.tovarArray.length == 0) {
          store.getTovarArray()
      } else { 
        if(type) {
          setArray(store.tovarArray.filter(elem =>{
            return elem.type === type
          }))
          if(sort) {
            setArray(store.tovarArray.filter(elem =>{
              return elem.type === type && elem.sort === sort
            }))
          }
        } else {
          setArray(store.tovarArray)
        }
      }}
    ,[store.tovarArray])
  useEffect(()=>{
    for(let i = 0;i < 15 && i < array.length;i++) {
      setVisible(array) 
    }
  },[array])
  function sortMin() {
    if(array.length > 0) {
      let min = array[0].value
      for(let i = 0;i < array.length;i++) {
        let x = Number(array[i].value)
        if(x < min) min = array[i].value
      }
      return min
    } else return 0
    
  }
  function sortMax() {
    if(array.length > 0) {
      let max = array[0].value
      for(let i = 0;i < array.length;i++) {
        let x = Number(array[i].value)
        if(x > max) max = array[i].value
      }
      return max
    } else return 0
  }
  function buttonsArr() {
    let arr = []
    for( let i = 1;i <= Math.ceil(array.length/15);i++) {
      arr.push(i)
    }
    return arr
  }
  function ButtonRe({child}) {
    return <button className='next' onClick={
      () => {
        setVisible(array.filter((elem,i) =>{
          return (i >= (child - 1) * 15) && (i < child * 15)
        }))
      }
    }>{child}</button>
  }
  return (
    <div className="catalog">
      <div className="bodyAt">
        <div className="menu_filter block">
          <div className="filter">
              <h2>Цена</h2>
              <input type="text" placeholder={'от ' + sortMin()}/>
              <input type="text" placeholder={'до ' + sortMax()}/>
          </div>
        </div>
      <div className="content">
        {visible.map(elem => {
          return <TovarCard key={'catalog_' + elem.name} star={true} card={elem}/>
        })}
        <div className="nexts">
          {buttonsArr().map(elem => {
            return <ButtonRe child={elem} />
          })}
        </div>
      </div>
        </div>
    </div>
  )
})
