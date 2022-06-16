import { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from'../index'
import TovarCard from "./TovarCard"

export default observer(function Versus({card,star}) {
  const {store} = useContext(Context)
  function VersusBox() {
    if(store.versus.length >= 2) {
        store.versus.length = 2
        if(store.versus[0].type == store.versus[1].type) {
            if(store.versus[0].sort == store.versus[1].sort) {
                return (
                    <>
                        <div className="versusBox">
                            <TovarCard card ={store.versus[0]} star={true}/>
                            <table>
                                <tr><td>Характеристика</td><td>Показатель</td></tr>
                                {store.versus[0].har.map(elem =>{
                                    return <tr><td>{elem[0]}</td><td>{elem[1] + ' (' + elem[2] + ')'}</td></tr>
                                })}
                            </table>
                        </div>
                        <div className="versusBox">
                            <TovarCard card={store.versus[1]} star={true}/>
                            <table>
                                <tr><td>Характеристика</td><td>Показатель</td></tr>
                                {store.versus[1].har.map(elem =>{
                                    return <tr><td>{elem[0]}</td><td>{elem[1] + ' (' + elem[2] + ')'}</td></tr>
                                })}
                            </table>
                        </div>
                    </>
                    
                )
            } else {
                return <div className="error"><span>неподходящие виды</span></div>
            }
        } else {
            return <div className="error"><span>неподходящие типы</span></div>
        }
    }else {
        return <div className="error"><span>недостаточно обьектов</span></div>
    }
  }
  return (
    <div className="versusBody">
        <VersusBox/>
    </div>
  )
})