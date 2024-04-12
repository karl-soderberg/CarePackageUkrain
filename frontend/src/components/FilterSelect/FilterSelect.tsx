import * as React from "react"
import './FilterSelect.css'

type Props = {
  onChange: (selectedValue: string) => void
}



export function FilterSelect( { onChange }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
