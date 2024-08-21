import { BreadCrumb } from "@/components/BreadCrumb";
import Form from "@/components/Form";
import { InputDemo } from "@/components/InputDemo";
import { InputFile } from "@/components/InputFile";
import { InputOTPDemo } from "@/components/InputOTP";
import { SelectDemo } from "@/components/Select";
import { SliderDemo } from "@/components/Slider";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <div>
      {/* Bài 1 */}
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button size={"lg"}>Size Large</Button>
      <Button size={"sm"}>Size small</Button>
      <br /> <br />
      {/* Bài 2 */}
      <InputDemo />
      <InputFile />
      <br /> <br />
      {/* Bài 3 */}
      <BreadCrumb />
      <br /> <br />
      {/* Bài 4 */}
      <SelectDemo />
      <br /> <br />
      {/* Bài 5 */}
      <InputOTPDemo />
      <br />
      <br />
      {/* Bài 6 */}
      <SliderDemo />
      <br /> <br />
      {/* Bài 7 */}
      <Form />
    </div>
  );
}
