//class component
import React from "react";
import "./NC.css";
class MyComponent2 extends React.Component {
  state = {
    name: "dqt",
    address: "hn",
    age: 22,
    sex: "gay",
  };
  //state sẽ là biến để lưu trữ dữ liệu,đơn giản là 1 object

  //JSX
  render() {
    return (
      <div>
        my name is {this.state.name} and im {this.state.sex}
      </div>
    );
  }
}
export default MyComponent2;
