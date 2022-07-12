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
    const {id, url, photographer, src, alt} = this.props;

    return (
      <div className="Cards">
        <img 
          url={url}
          src={src.medium}
          alt={alt}
        />
        <div className="card__overlay">
          <div className="card__title">

          </div>
        </div>
      </div>
    )
  }
}

export default Card;