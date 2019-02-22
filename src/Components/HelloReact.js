import React from 'react'

class HelloReact extends React.Component {
  render() {
    return (
      <div className="HelloReact">
        <h1>Hello React!</h1>
        <div>
          React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
        </div>
        <br/>
        <div>
          Declarative views make your code more predictable and easier to debug.
        </div>
      </div>
    ) 
  }
  
}

export default HelloReact
