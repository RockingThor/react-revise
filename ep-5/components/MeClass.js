import React from "react";

class MeClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, loaction } = this.props;
    return (
      <>
        <h1>{name}</h1>
        <h2>{loaction}</h2>
        <h3>Count: {this.state.count}</h3>
        <Child1 />
        <Child2 />
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
      </>
    );
  }
}

class Child1 extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child1 constructor called");
  }

  componentDidMount() {
    console.log("Child1 componentDidMount called");
  }

  render() {
    console.log("Child1 render called");
    return <h1>Child1</h1>;
  }
}

class Child2 extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child2 constructor called");
  }

  componentDidMount() {
    console.log("Child2 componentDidMount called");
  }

  render() {
    console.log("Child2 render called");
    return <h1>Child2</h1>;
  }
}

export default MeClass;

// Mounting/Loading

// When the class is instantiated the constructor is called and the render is called

// Class instantiated => constructor => render => componentDidMount

//
