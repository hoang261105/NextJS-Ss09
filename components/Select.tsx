import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Môn học" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">HTML</SelectItem>
          <SelectItem value="banana">CSS</SelectItem>
          <SelectItem value="blueberry">Javascript</SelectItem>
          <SelectItem value="grapes">ReactJS</SelectItem>
          <SelectItem value="pineapple">NextJS</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
