import "./app.css";
import Nav from "./components/nav";
import Habits from "./components/habits";
import React, { Component } from "react";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
    totalCount: 0,
  };
  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (habit.id === item.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      const count = habit.count - 1;
      if (habit.id === item.id) {
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleAdd = (habit) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: habit, count: 0 },
    ];
    this.setState({ habits });
  };
  handleDelete = (habit, count) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);

    this.setState({ habits });
  };
  // reducer = (count) => {
  //   const habits = [...this.state.habits];
  //   const totalCount = habits.filter((habit) => habit.count > 0).length;
  //   // const totalCount = habits.reduce((a, b) => a + (b[count] || 0), 0);
  //   this.setState({ totalCount });
  // };
  handleReset = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    this.setState({ habits });
  };
  render() {
    console.log("app");
    return (
      <div>
        <Nav
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />

        <Habits
          onDelete={this.handleDelete}
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          handleAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
