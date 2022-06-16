import { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from'../index'
import TovarCard from './TovarCard'

export default observer(function Basket() {
  const {store} = useContext(Context)
  return (
    <div className="bodyBasket">
        {store.basketArray.map(element => {
            return <TovarCard card={element}/>
        })}
    </div>
  )
})