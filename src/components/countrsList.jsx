import React, {useState} from "react";
import { Counter } from './counter'

export const CountersList = () => {
    // Массив со свойствами каждого из счетчиков (массив исходнынх данных)
    const [counters, setCounters] = useState([
        {id: 0, value: 0, name: 'Ложка', price: '150'}, 
        {id: 1, value: 1, name: 'Вилка'}, 
        {id: 2, value: 0, name: 'Тарелка', material: 'porcelaine'}, 
        {id: 3, value: 0, name: 'Набор минималиcта'}
    ])
    const handleDelete = (id) => {
        const newCounters = counters.filter(counter => counter.id!==id)
        setCounters(newCounters)
    }

    return (
        <>
            {counters.map(counter => (
                <Counter 
                    key={counter.id} 
                    {...counter}
                    onDelete = {handleDelete}/>
            ))}
        </>
    )
}