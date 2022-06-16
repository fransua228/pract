import { useContext } from 'react'
import {Link} from 'react-router-dom'
import Image from './Image'
import {observer} from 'mobx-react-lite'
import {Context} from'../index'

export default observer(function TovarCard({card,star}) {
  const {store} = useContext(Context)
  let url = store.serverUrl +'/image/catalog/card_' + card.url
  function swap() {
    if(store.basketArray.includes(card)) {
      store.setBasketArray(store.basketArray.filter(item => {
        return item.name !== card.name
      }))
    } else {
      store.setBasketArray([card,...store.basketArray])
    }
  }
  function swapVersus() {
    if(store.versus.includes(card)) {
      store.setVersus(store.versus.filter(item => {
        return item.name !== card.name
      }))
    } else {
      store.setVersus([card,...store.versus])
    }
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
  function toUrl() {
    let str = card.company + card.type + card.name
    return str = str.split(' ').join('')
  }
  function stars() {
    if(star === true) {
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
  }
  return (
    <div className="card_tovar">
        <div className="hide"><Image url={url} /></div>
        <h1><Link to={'/tovar/' + toUrl()}>{card.typeRu + ' ' + card.company + ' ' + card.name}</Link></h1>
        {stars()}
        <div className='buttons'>
            <button onClick={() => {swapVersus()}} className={"versus button " + checkVersus()}><i className="fas fa-balance-scale"></i></button>
            <button onClick={() => {swap()}} className={"basket button " + check()}><i className="fas fa-shopping-basket"></i></button>
            <button className="buy">{card.value}</button>
        </div>
    </div>
  )
})