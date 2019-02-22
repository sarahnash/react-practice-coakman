import React from 'react'

class LoremIpsum extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      myArray: [],
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus at magna sit amet tristique. Suspendisse ut varius dui, tincidunt semper sapien. Nullam bibendum eros lectus, eu posuere velit ultrices sed. Proin consectetur lacus nec metus ullamcorper, ac tempus felis eleifend. Donec eu euismod nisl. Morbi fringilla justo sit amet blandit dictum. Fusce sollicitudin ipsum ut mauris posuere pharetra. Praesent vitae elit nec ex placerat faucibus a in diam. Sed bibendum sit amet dui at facilisis. Vivamus vitae felis lacinia, gravida lectus id, placerat ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer feugiat, sem in interdum tempor, nisi enim mollis nibh, luctus laoreet massa ligula nec ex.'
    }
  }

  addParagraph = () => {
    let newArray = this.state.myArray
    newArray.push(this.state.paragraph)
    console.log(newArray)
    this.setState({
      value: this.state.value + 1,
      myArray: newArray
    })
    
  }

  removeParagraph = () => {
    if (this.state.value === 0) {
      this.setState({
        value: this.state.value,
        myArray: this.state.myArray
      })
    } else {
      let newArray = this.state.myArray
      newArray.pop()
      console.log(newArray)
      this.setState({
        value: this.state.value - 1,
        myArray: newArray
      })
    }
  }

  render() {
    return (
      <div className="LoremIpsum">
      <h1>Number of Lorem Ipsum paragraphs: {this.state.value}</h1>
      <button onClick={this.addParagraph}>Add Paragraph</button>
      <button onClick={this.removeParagraph}>Remove Paragraph</button>
      <br/>
      <div className="paragraphContainer">
      {this.state.myArray.map((paragraph, index) => {
        return (<div key={index}><div>{paragraph}</div>
      <br/></div>)})}
      </div>
      </div>
    ) 
  }
  
}

export default LoremIpsum
