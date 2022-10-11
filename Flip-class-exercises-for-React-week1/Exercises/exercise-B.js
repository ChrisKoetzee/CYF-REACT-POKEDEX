// const element = <div>Hello World</div>;

// Exercise B (estimate: 5 min)
// Change the JSX example from above to instead render a h1 tag with the text "Hello Code Your Future".
const element = <h1>Hello Code Your Future</h1>;

console.log(element);

// React Components
// We looked at the beginning of the lesson at the concept of components. Now look at how components are made in React.
import React from "react";
import ReactDOM from "react-dom";

function HelloWorld() {
  return <div>Hello World</div>;
}

ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
// There are 3 important parts in this code:
// First we import React. This is important because JSX is converted to React.createElement calls. If the React variable is undefined then this will fail.
// We create a React component called HelloWorld.
// We render the HelloWorld component into the element with the id of root.
// DEFINITION
// The process of rendering is turning the JSX elements returned by the component function into DOM elements on the screen. This is done by React for you.


