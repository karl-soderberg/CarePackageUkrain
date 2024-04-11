import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export function FilterSelect( { onChange }) {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    console.log("Selected value:", selectedValue); // Log the selected value
    onChange(selectedValue); // Call the onChange function with the selected value
  };

  return (
    <Select onChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter By City" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>City</SelectLabel>
          <SelectItem value="Stockholm">Stockholm</SelectItem>
          <SelectItem value="Uppsala">Uppsala</SelectItem>
          <SelectItem value="Alaska">Alaska</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
