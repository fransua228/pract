import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import Catalog from './Catalog'
import Basket from './Basket'
import Tovar from './Tovar'
import Versus from './Versus'
export default function App() {
  return (
    <div className="App">
      <Router> 
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/catalog" element={<Catalog />}>
            <Route path=":type">
              <Route path=":sort"/>
            </Route>
          </Route>
          <Route path="/basket" element={<Basket/>}/>
          <Route path="/tovar/:cardfilter" element={<Tovar/>}/>
          <Route path="/versus" element={<Versus/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
