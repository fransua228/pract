import { useContext,useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import {Context} from'../index'
import Image  from './LazyImg' 

export default observer(function TovarCard() {
  const [card,setCard] = useState(null)
  const [basket,setBasket] = useState('')
  const [versus,setVersus] = useState('')
  const {store} = useContext(Context)
  const {cardfilter} = useParams()
  useEffect(()=>{
    if(store.tovarArray.length == 0) {
        store.getTovarArray()
    } else {
        setCard(store.tovarArray.filter(element =>{
            let str = element.company + element.type + element.name
            str = str.split(' ').join('')
            return str === cardfilter
        })[0])
        if(card) {
            setVersus(checkVersus())
            setBasket(check())
        }   
    }
},[store.tovarArray,card])
  function swap() {
    if(store.basketArray.includes(card)) {
        setBasket('')
      store.setBasketArray(store.basketArray.filter(item => {
        return item.name !== card.name
      }))
    } else {
        setBasket('active')
      store.setBasketArray([card,...store.basketArray])
    }
  }
  function swapVersus() {
    if(store.versus.includes(card)) {
        setVersus('')
      store.setVersus(store.versus.filter(item => {
        return item.name !== card.name
      }))
    } else {
        setVersus('active')
      store.setVersus([card,...store.versus])
    }
  }
  function stars() { 
      let str1 = ''
      let str2 = ''
      for(let i = 0;i < card.rating;i++) {
         str1+='★'
      }
      for(let i = card.rating;i < 5;i++) {
        str2+='★'
     }
      return <span className="stars"><span>{str1}</span><span>{str2}</span></span>
  }
  function check() {
    if(store.basketArray.includes(card)) {
      return 'active'
    } else {
      return ''
    }
  }
  function checkVersus() {
    if(store.versus.includes(card)) {
      return 'active'
    } else {
      return ''
    }
  }
  function CardTovar() {
      if(card != null) {
          return (
            <div className="tovar">
                <h1>{card.typeRu + ' ' + card.company + ' ' + card.name}</h1>
                <div className="prev">
                    <Image url={store.serverUrl + '/image/catalog/card_' + card.url} />
                    <div className="info">
                        <p>{card.description}</p>
                        <div className="other block">
                            <span>нет похожих</span>
                        </div>
                        {stars()}
                        <div className='buttons'>
                            <button onClick={() => {swapVersus()}} className={"basket button " + versus}><i className="fas fa-balance-scale"></i></button>
                            <button onClick={() => {swap()}} className={"basket button " + basket}><i className="fas fa-shopping-basket"></i></button>
                            <button className="buy">{card.value}</button>
                        </div>
                    </div>
                </div>
                <div className="prev">
                    <table>
                        <tr><td>Характеристика</td><td>Показатель</td></tr>
                        {card.har.map(elem =>{
                            return <tr><td>{elem[0]}</td><td>{elem[1] + ' (' + elem[2] + ')'}</td></tr>
                        })}
                    </table>
                    <div className="other block accesure">
                        <span>нет аксессуаров</span>
                    </div>
                </div>
            </div>
          )
    }else {
        return(
            <div className="error">
                <span>Ожидайте загрузку...</span>
            </div>
        )
    }
  }
  return (
    <CardTovar />
  )
})