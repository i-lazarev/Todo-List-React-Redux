import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <div className="space">
      Task completed{" "}
      <span className="badge badge-success">
        {props.items && props.items.filter(item => item.status === true).length}
      </span>{" "}
      from{" "}
      <span className="badge badge-danger">
        {props.items && props.items.length}
      </span>
    </div>
  );
}

const MapStateToProps = state => {
  return {
    items: state.todos
  };
};
export default connect(MapStateToProps)(Counter);
