import React from 'react'

const CategoryFilter = ({handleFilter}) => {
    const categories = [
        'Action',
        'Biography',
        'History',
        'Horror',
        'Kids',
        'Learning',
        'Sci-Fi',
        'All'
      ];
    return (
        <>
           <select name="categories" >
            {categories.map(category => (
              <option key={Math.random()} value={category} onChange={() => handleFilter(category)}>{category}</option>
            ))}
          </select>
        </>
    )
}


export default CategoryFilter;