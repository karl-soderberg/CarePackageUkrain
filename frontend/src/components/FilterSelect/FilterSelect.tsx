import * as React from "react"
import './FilterSelect.css'




export function FilterSelect( { onChange }) {
    const handleChange = (e) => {
      const selectedValue = e.target.value;
      onChange(selectedValue);
    };
  
    return (
      <section className="filter-section">
        <select className="filter-section__select" onChange={handleChange}>
          <option value="">Filter by city</option>
          <option value="Stockholm">Stockholm</option>
          <option value="Uppsala">Uppsala</option>
          <option value="Alaska">Alaska</option>
        </select>
      </section>
            

    )
  
}
