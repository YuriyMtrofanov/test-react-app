import React, {useState} from "react"
import "bootstrap/dist/css/bootstrap.css"

export const Counter = (props) => {
  // "props" - это объект, в который мы передаем атрибуты создаваемого
  // компонента. Так как при рендере <Counter /> мы задаем атрибут "value", 
  // при этом в массиве исходных данных ("counters") я задаю значение параметра "value". 
  // Т.о "props" - это объект с элементами, равными заданным при ренедринге атрибутами.
  // Ну и в данном случае я могу, используя "props" задать начальное значение для значения
  // задаваемой переменной.
  // Также в props можем передавать информацию, на основе которой будут рендериться дочерние элементы данного компонента.
  // В частности, св-во "counters.name" передает в дочерний элемент <span> компонента "Counter" значение {props.name} (см. return)
  // Т.е. в данном случае "props.name = counters.name";  также как  "props.value = counters.value"
  console.log(props)
  let [value, satValue] = useState(props.value)

  function formatCount(){
    return value === 0 ? "empty" : value
  }
  const getBadgeClasses = () => {
    let classes = "badge m-2 "
    classes += value === 0 ? "bg-warning" : "bg-primary"
    return classes
  }

  function handleIncrement(){
    satValue((prevState) => prevState + 1)
    console.log(value)
  }

  function handleDecrement(){
    satValue((prevState) => prevState - 1)
    console.log(value)
  }

    return (
      <div>
        <span>{props.name}</span>
        <span className = { getBadgeClasses() }> { formatCount() } </span>
        <button className = 'btn btn-primary btn-sm m-1' onClick = { handleIncrement }> + </button>
        <button className = 'btn btn-primary btn-sm m-1' onClick = { handleDecrement }> - </button>
        <button className="btn btn-danger btn-sm m-2" onClick = {() => props.onDelete(props.id)}>Delete</button>
      </div>
    )
  }

  