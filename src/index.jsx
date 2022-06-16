import React,{createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './style/index.scss'
import Store from './store/store'

const store = new Store()

export const Context = createContext({store})

ReactDOM.render(
    <Context.Provider value={{store}}>
      <App />
    </Context.Provider>,
  document.getElementById('root')
);

reportWebVitals();
