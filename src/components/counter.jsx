import React, {useState} from "react"
import "bootstrap/dist/css/bootstrap.css"

export const Counter = (props) => {
  // "props" - это объект, в который мы передаем атрибуты создаваемого
  // компонента. Так как при рендере <Counter /> мы задаем атрибут "value", 
  // при этом в массиве исходных данных ("counters") я задаю значение параметра "value". 
  // Т.о "props" - это объект с элементами, равными заданным при ренедринге атрибутами.
  // Ну и в данном случае я могу, используя "props" задать начальное значение для значения
  // задаваемой переменной.
  let [count, setCount] = useState(props.value)

  function formatCount(){
    return count === 0 ? "empty" : count
  }
  const getBadgeClasses = () => {
    let classes = "badge m-2 "
    classes += count === 0 ? "bg-warning" : "bg-primary"
    return classes
  }

  function handleIncrement(){
    setCount((prevState) => prevState + 1)
    console.log(count)
  }

  function handleDecrement(){
    setCount((prevState) => prevState - 1)
    console.log(count)
  }

    return (
      <div>
        <span className = { getBadgeClasses() }> { formatCount() } </span>
        <button className = 'btn btn-primary btn-sm m-1' onClick = { handleIncrement }> + </button>
        <button className = 'btn btn-primary btn-sm m-1' onClick = { handleDecrement }> - </button>
      </div>
    )
  }

  