import React from 'react'
import './search.css'
import Filter from '../../components/filter/Filter'
import Card from "../../components/card/Card"
import {listData} from "../../lib/dummyData"

const Search = () => {
  return (
    <div className='searchPage'>
      <div className="search-container">
        <div className="search-container-wrapper">
          <Filter/>
          {listData.map(item => (
            <Card key={item.id}/>
          ))}
        </div>
      </div>
      <div className="map-container">map container</div>
    </div>
  )
}

export default Search
