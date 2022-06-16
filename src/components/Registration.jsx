import { useState } from "react"
export default function Registration() {
    const [visible,setVisible] = useState(false)
    function swap(){visible ? setVisible(false) : setVisible(true)}
    function Entry({swap}) {
        return(
            <>
                <h1>Вход</h1>
                <input type="text" placeholder="Логин..."/>
                <input type="text" placeholder="Пароль..."/>
                <div className='buttons'>
                    <button className="re" onClick={swap}><i className="fas fa-sync-alt"></i></button>
                    <button className="reg-button">Вход</button>
                </div>
            </> 
        )
    }
    function Reg({swap}) {
        return(
            <>
                <h1>Регистрация</h1>
                <input type="text" placeholder="Логин..."/>
                <input type="text" placeholder="Пароль..."/>
                <input type="text" placeholder="Пароль..."/>
                <div className='buttons'>
                    <button className="re" onClick={swap}><i className="fas fa-sync-alt"></i></button>
                    <button className="reg-button" >Регистрация</button>
                </div>
            </>   
        )
    }
    return(
        <div className="auth block">
           {visible ? <Reg swap={swap} state={setVisible}/> : 
           <Entry swap={swap} state={setVisible}/>} 
        </div>
    )
}