import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import "../styles/App.scss";
//import TodoList from './TodoList';
import TodoContainer from "./TodoContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoContainer />
      </Provider>
    </div>
  );
}

export default App;
