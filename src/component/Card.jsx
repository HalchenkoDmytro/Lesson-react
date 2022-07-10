import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: ' ',
      url: ' ',
      photographer: ' ',
      src: '',
      alt: ' ' 
    }
  }

  render() {
    const {id, url, photographer, src, alt} = this.props.image;

    return (
      <div className="Cards">
        <img 
          url={url}
          src={src}
          alt={alt}
        />
      <p>
        id={id}
      </p>
      <p>
        photographer={photographer}
      </p>
      </div>
    )
  }
}

export default Card;