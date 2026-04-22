import { useRef } from 'react'
import './SearchBar.css'

function SearchBar(props) {
  const cityRef = useRef();

  const handlClick = () => {
    let city = cityRef.current.value;
    props.onSearch(city);
  }

  return (
    <>
      <div className="sb-wrapper">
        <input type="text" className="searchBox" placeholder="City Name" ref={cityRef} />
        <button className='search-btn' onClick={handlClick}>
          <img src="search.png" className='search-icon' />
        </button>
      </div>
    </>
  )
}

export default SearchBar