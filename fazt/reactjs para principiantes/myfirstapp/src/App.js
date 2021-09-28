import React from "react";
import "./App.css";

// function HelloWorld(props) {
//   console.log(props);
//   return (
//     <div id="hello">
//       <h3>{props.subtitle}</h3>
//       {props.mytext}
//     </div>
//   );
// }

class HelloWorld extends React.Component {
  //estado
  state = {
    show: true,
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  // <button onClick={this.toggleShow.bind(this}>Toggle Show</button>
  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      );
    } else {
      return (
        <h1>
          There are not elements
          <button onClick={this.toggleShow}>Toggle Show</button>
        </h1>
      );
    }
  }
}

// const App = () => {
//   <div>This is my component <HelloWorld/> with arrow function</div>
// }

// class App extends React.Component{
//   render() {
//     return <div>This is my component <HelloWorld/> with class</div>
//   }
// }

function App() {
  return (
    <div>
      This is my component:
      <HelloWorld mytext="Hello Fazt" subtitle="loremp ipsum" />
      <HelloWorld mytext="hola mundo" subtitle="component 2" />
      <HelloWorld mytext="hello" subtitle="component 3" />
    </div>
  );
}

export default App;
