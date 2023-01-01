import React, {useState} from "react";
import { Counter } from './counter'

export const CountersList = () => {
    // Массив со свойствами каждого из счетчиков (массив исходнынх данных)
    const initialState = [
        {id: 0, value: 0, name: 'Ложка', price: '150'}, 
        {id: 1, value: 1, name: 'Вилка'}, 
        {id: 2, value: 0, name: 'Тарелка', material: 'porcelaine'}, 
        {id: 3, value: 0, name: 'Набор минималиcта'}
    ]
    const currentlState = [
        {id: 0, value: 3, name: 'Ложка', price: '150'}, 
        {id: 1, value: 2, name: 'Вилка'}, 
        {id: 2, value: 7, name: 'Тарелка', material: 'porcelaine'}, 
        {id: 3, value: 0, name: 'Набор минималиcта'}
    ]

    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        const newCounters = counters.filter(counter => counter.id!==id)
        setCounters(newCounters)
    }

    const handleReset = () => {
        setCounters(initialState)
        // console.log('handle reset')
    }
    
    const handleUpdate = () => {
        setCounters(currentlState)
        // console.log('handle update')
    }

    return (
        <>
            {counters.map(counter => (
                <Counter 
                    key={counter.id} 
                    {...counter}
                    onDelete = {handleDelete}/>
                    
            ))}
            <button className="btn btn-primary btn-sm m-2" onClick = {handleReset}>Сброс</button>
            <button className="btn btn-primary btn-sm m-2" onClick = {handleUpdate}>Обновить</button>
        </>
    )
}