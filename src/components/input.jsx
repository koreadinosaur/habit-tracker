import React, { PureComponent } from "react";

class Input extends PureComponent {
  inputRef = React.createRef();
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(this.inputRef.current.value);
    this.inputRef.current.value = "";
  };
  render() {
    console.log("addform");
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <input
          type="form"
          className="add-input"
          placeholder="Habit"
          ref={this.inputRef}
        />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    );
  }
}

export default Input;
