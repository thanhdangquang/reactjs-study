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
  handleClick(event) {
    // console.log(">>Clicked");
    // console.log(event.pageX);
    console.log("random:", Math.floor(Math.random() * 100) + 1);
    this.setState({
      name: "soclo",
      sex: "ngu",
    });
    this.setState({
      age: Math.floor(Math.random() * 100) + 1,
    });
  }

  handleOnMouseOver(event) {
    console.log(event);
  }
  //JSX
  render() {
    return (
      <div>
        my name is {this.state.name} and im {this.state.sex}
        <button onMouseOver={this.handleOnMouseOver}> Over me</button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          {" "}
          Click me
        </button>
      </div>
    );
  }
}
export default MyComponent2;
