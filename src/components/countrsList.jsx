import React from "react";
import { Counter } from './counter'

export const CountersList = () => {
    // Массив со свойствами каждого из счетчиков (массив исходнынх данных)
    const counters = [
        {id: 0, value: 0}, 
        {id: 1, value: 4}, 
        {id: 2, value: 0}, 
        {id: 3, value: 0}
    ]

    return (
        <>
            {counters.map(counter => (
                <Counter key={counter.id} value={counter.value} />
            ))}
        </>
    )
}