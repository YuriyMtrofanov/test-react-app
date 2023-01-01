import React, {useState} from "react";
import { Counter } from './counter'

export const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: 'Ложка', price: '150'}, 
        {id: 1, value: 1, name: 'Вилка'}, 
        {id: 2, value: 0, name: 'Тарелка'}, 
        {id: 3, value: 0, name: 'Набор минималиcта'}
    ]

    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        const newCounters = counters.filter(counter => counter.id!==id)
        setCounters(newCounters)
    }

    const handleIncrement = (id) => {
        const counters_inc = counters.map(counter => {
            if (counter.id === id) {++counter.value}
            return counter
        })
        setCounters(counters_inc)
    }

    const handleDecrement = (id) => {
        const counters_dec = counters.map(counter => {
            if (counter.id === id) {--counter.value}
            return counter
        })
        setCounters(counters_dec)
    }

    const handleReset = () => {
        setCounters(initialState)
    }

    return (
        <>
            {counters.map(counter => (
                <Counter 
                    key={counter.id} 
                    {...counter}
                    onDelete = {handleDelete}
                    onIncrement = {handleIncrement}
                    onDecrement = {handleDecrement}
                />
                    
            ))}
            <button className="btn btn-primary btn-sm m-2" onClick = {handleReset}>Сброс</button>
        </>
    )
}