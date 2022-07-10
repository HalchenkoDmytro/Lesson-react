import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    // this.makeRequest()
  }


  makeRequest() {
    fetch("https://api.pexels.com/v1/search?query=people", {
  headers: {
    Authorization: "563492ad6f917000010000015e164f45593b43f3b0608ed427916c2a"
  }
})
   .then (response => response.json ())
   .then (data => console.log( data.photos ))
   .catch( error => console.log( error ) )
  }

  componentDidMount() {
    this.makeRequest()
  }

  render() {
    return (
      <ul>



      </ul>
    )
  }
}

export default List;