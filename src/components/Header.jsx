import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../images/logo.png'
import search from '../images/search.png'
export default function Header() {
  const [hide,setHide] = useState(false)
  return (
    <header>
        <NavLink to="/" className="logo"><img src={logo} alt="ТехноRU" /></NavLink>
        <div className='search'>
        <input type="text" placeholder='Найти...'/><img src={search} alt="/" />
        </div>
        <div className="button_hide" onClick={()=>{setHide(!hide)}}>{hide ? '-' : '+'}</div>
        {!hide ? <nav>
            <NavLink to='/versus' className='nav_element'><b></b><b></b><i className="fas fa-balance-scale"></i>Сравнение</NavLink>
            <NavLink to='/basket' className='nav_element'><b></b><b></b><i className="fas fa-shopping-basket"></i>Корзина</NavLink>
            <NavLink to='/catalog' className='nav_element'><b></b><b></b><i className="fas fa-book-open"></i>Каталог</NavLink>
        </nav> :  <></>}
    </header>
  )
}