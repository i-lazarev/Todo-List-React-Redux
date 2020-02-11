import React from "react";
import { connect } from "react-redux";
import { todoActions } from "../actions";
import "../styles/Item.scss";

function Items(props) {
  const onStatus = id => props.toggleTodo(id);
  const onDelete = id => props.delTodo(id);
  return (
    <div className="list-group mb-4">
      {props.items.map(item => (
        <div
          className="list-group-item d-flex justify-content-between align-item-center "
          key={item.id}
        >
          <div className={item.status ? "strike" : "todo-item-text"}>
            {" "}
            {item.text}{" "}
          </div>
          <div>
            <span
              onClick={() => onStatus(item.id)}
              className={
                "badge badge-pill ml-4 " +
                (item.status ? "badge-success" : "badge-warning")
              }
            >
              {item.status ? "Done" : "To do"}
            </span>
            <span onClick={() => onDelete(item.id)} className="close ml-2">
              &times;
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

const MapDispatchToProps = {
  toggleTodo: todoActions.toggleTodo,
  delTodo: todoActions.delTodo
};

const MapStoreToProps = state => {
  return {
    items: state.todos
  };
};
export default connect(MapStoreToProps, MapDispatchToProps)(Items);
