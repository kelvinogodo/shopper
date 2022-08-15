import React from 'react'

const SearchItems = ({onSearch}) => {
  return (
    <form className='search-input-container'>
        <input type="search" name="" id="" placeholder='enter name of item to search' className='search-input' onChange={(e)=>{
          e.preventDefault()
          const letter = e.target.value;
          onSearch(letter)}}/>
    </form>
  )
}

export default SearchItems