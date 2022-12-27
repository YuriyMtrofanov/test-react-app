import React, {useState} from "react"
import "bootstrap/dist/css/bootstrap.css"
// import './App.css'

export const Counter = () => {
  // let count = 0
  let [count, setCount] = useState(0)

  const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])

  function formatCount(){
    return count === 0 ? "empty" : count
  }
  const getBadgeClasses = () => {
    let classes = "badge m-2 "
    classes += count === 0 ? "bg-warning" : "bg-primary"
    return classes
  }
  /* Дефолтно к кнопке применяется класс 'badge bg-primary m-2', нужно при значении count = 0
  применить класс 'badge bg-warning m-2' т.е. динамически поменять среднюю часть класса. 
  Для этого создадим функцию getBadgeClasses(), которая использует тернарное выражение и 
  динамичкски генерирует имя класса. Поэтому в теге span мы указываем не имя класса а вызываем ф-ю
  { getBadgeClasses() }
  */

  function handleIncrement(){
    // count++
    setCount((prevState) => prevState + 1)
    console.log(count)
  }

  function handleDecrement(){
    // count--
    setCount((prevState) => prevState - 1)
    console.log(count)
  }

  function handleTagChange(id){
    console.log(id)
    setTags(prevState => prevState.filter((tag) => tag !== id)) 
  }


  function renderTags(){
    /* 
    Запись с классическим синтаксисом:

    if (tags.length === 0){
      return "No tags"}
    else {
      return tags.map(tag => {
        return (
          <li 
              key = {tag} 
              className = 'btn btn-primary btn-sm m-2' 
              onClick = {() => handleTagChange(tag)}
          >
              {tag}
          </li>
      )})
    }
    */

    // Запись с помощью тернарного выражения:
    return tags.length !== 0 
      && tags.map(tag => (
            <li 
                key = {tag} 
                className = 'btn btn-primary btn-sm m-2' 
                onClick = {() => handleTagChange(tag)}
            >
                {tag}
            </li>
        ))
      // : "No tags"
  }

  if (tags.length !== 0) {
    return <ul> {renderTags()} </ul>
  } else {
    return (
      <>
        <ul>
          { renderTags() }
        </ul>

        <span className = { getBadgeClasses() }> { formatCount() } </span>
        <button className = 'btn btn-primary btn-sm m-2' onClick = { handleIncrement }> + </button>
        <button className = 'btn btn-primary btn-sm m-2' onClick = { handleDecrement }> - </button>
      </>
    )
  }
  }
  