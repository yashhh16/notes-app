import React from 'react'
import {MdSearch} from 'react-icons/md'
function Search({handleSearchNote}) {
 
  return (
    <div className='Search'>
      
      <MdSearch  className='search-icon' size='1.3rem'/>
      <input onChange={(event)=>handleSearchNote(event.target.value)} type="text" placeholder='Type to search ....' />
       </div>
  )
}

export default Search
