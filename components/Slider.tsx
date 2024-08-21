"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderDemo({ className, ...props }: SliderProps) {
  const [value, setValue] = useState<number[]>([50]);

  const handleSliderChange = (newValue: number[]) => {
    setValue(newValue);
  };

  const getColor = (value: number) => {
    if (value < 33) return "text-green-500";
    if (value < 66) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <>
      <Slider
        defaultValue={value}
        max={100}
        step={1}
        className={cn("w-[60%] ", className)}
        onValueChange={handleSliderChange}
        {...props}
      />{" "}
      <br />
      <h2 className={getColor(value[0])}>Giá trị: {value[0]}</h2>
    </>
  );
}
