import Menu from './Menu'
import Registration from './Registration'
import Slider from './Slider'
import NewTovar from './NewTovar'
export default function Home() {
  return (
    <div className="home">
        <div className="body">
            <Menu />
            <div className="content-body">
                <Slider />
                <Registration />
                <NewTovar/>
            </div> 
        </div>
    </div>
  )
}