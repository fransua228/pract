import {useState,useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'

export default observer(function Menu() {
    const {store} = useContext(Context)
    function MenuItem({head,mini1,mini2,icon,type,sort1,sort2}) {
        return(
            <div className="menuItem">
                <i className={icon}></i> 
                <div className="mib">
                    <div>
                        <Link to={'/catalog/'+ type + '/' + sort1} className='mini'>{mini1}</Link> 
                        <Link to={'/catalog/'+ type + '/' + sort2} className='mini'>{mini2}</Link>
                    </div>
                    <Link to={'/catalog/'+ type} className='head'>{head}</Link>
                </div>
            </div>
        )
    }
    return(
        <div className="menu block">
            {store.typesTovar.map(element => {
                return <MenuItem head={element.typeRu} mini1={element.sort1Ru} type={element.type} 
                sort1={element.sort1} sort2={element.sort2}
                mini2={element.sort2Ru} icon={element.icon}/>
            })}
        </div>
    )
})

