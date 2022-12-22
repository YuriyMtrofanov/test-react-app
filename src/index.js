import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css"
import { Counter } from './components/counter';
// import './index.css';
// import { App } from './App';
// import reportWebVitals from './reportWebVitals';


// Инициализирую React-компонент (функцию), который будет рендерить React-элементы.
// В данном случае - эл-т "Counter", заданный в './components/counter'
const App = () => {
  return <Counter />
}

// Рендер в 18-й версии React выглядит следующим образом:
const rootBlock = document.getElementById('root')
const root = ReactDOM.createRoot(rootBlock)
  root.render( 
    <App />
  )
