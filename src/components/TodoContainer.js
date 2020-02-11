import React from 'react'
import Title from './Title'
import TodoList from './TodoList'
import Counter from './Counter'
import Items from './Items'

export default function TodoContainer() {
    return (
        <header className="App-header">
            <Title />
            <Items />
            <Counter />
            <TodoList />
        </header>
    )
}
