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

type Props = {
  onChange:
}

export function FilterSelect( { onChange }) {
  return (
    <Select onChange={(e: React.FormEvent) => onChange(e.target.value)}>
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
  )
}
