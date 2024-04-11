import * as React from "react"



export function FilterSelect( { onChange }) {
    const handleChange = (e) => {
      const selectedValue = e.target.value;
      onChange(selectedValue);
    };
  
    return (
      <select onChange={handleChange}>
        <option value="">All cities</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Uppsala">Uppsala</option>
        <option value="Alaska">Alaska</option>
      </select>
    );
  
}
