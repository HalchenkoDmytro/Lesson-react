const handleClick(event) => {
  console.log('event', event);
}

const ButtonSearch = () => {
  return (
    <button 
      className="btn" 
      type="submit" 
      onClick={(e) => this.handleClick(e)}>
        Search
    </button>
  )
}

export default ButtonSearch;