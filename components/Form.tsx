import { Label } from "@radix-ui/react-label";
import React from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

export default function Form() {
  return (
    <div className="container">
      <b>Tạo dự án</b> <br /> <br />
      <form action="">
        <Label htmlFor="terms">Tên</Label>
        <Input type="text" placeholder="Nhập tên" className="w-full" /> <br />
        <Label htmlFor="terms">Công nghệ</Label> <br />
        <Select>
          <SelectTrigger className="w-full">
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
        <br />
        <div className="button">
          <Button variant={"secondary"}>Đóng</Button>
          <Button variant={"dark"}>Tạo</Button>
        </div>
      </form>
    </div>
  );
}
