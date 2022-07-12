import React from "react";
import Card from "./Card";

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      loading: false
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
   .then (data => this.setState({data: data}))
   .catch( error => console.log( error ));
  }

  componentDidMount() {
    this.makeRequest()
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        {
          data.photos && data.photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.src.medium} alt={photo.alt} />
          </li>))
        }
      </div>
    )
  }
}

export default List;