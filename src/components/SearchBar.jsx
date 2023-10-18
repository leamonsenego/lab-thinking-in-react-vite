// EXTERNAL DEPENDENCIES
import React, {useEffect, useState} from "react";

// INTERNAL DEPENDENCIES

// STYLES
import "../styles/SearchBar.css";

const SearchBar = (props) => {
  const { onSearch } = props
  const [searchValue, setSearchValue] = useState("")
  const [showInStock, setShowInStock] = useState(false)

  useEffect(() => {
    onSearch(searchValue, showInStock);
  }, [searchValue, showInStock])

  const handleSearch = (event) => {
    const value = event.target.value

    setSearchValue(value);
  }

  const handleCheckboxChange = () => {
    setShowInStock(!showInStock);
  }

  return (
    <div className="searchProduct">
      <label>Find a product</label>
      <br />
      <input
        type="search"
        value={searchValue}
        onChange={handleSearch}
      />
      <div>
        <input
          type="checkbox"
          checked={showInStock}
          onChange={handleCheckboxChange}
        />
        <label>Only show products in stock</label>
      </div>
    </div>
  )
}

export default SearchBar
