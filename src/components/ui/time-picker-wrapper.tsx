"use client";
import { useState } from "react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { Clock } from "lucide-react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface TimePickerWrapperProps {
  value: string;
  onChange: (time: string) => void;
  onBlur: () => void;
  name: string;
}

export function TimePickerWrapper({
  value = "",
  onChange,
  onBlur,
}: TimePickerWrapperProps) {
  const [selectedTime, setSelectedTime] = useState(
    value ? dayjs(value, "HH:mm") : null
  );

  const handleTimeChange = (
    newValue: dayjs.Dayjs | null
  ) => {
    console.log("Time changed to:", newValue ? newValue.format("HH:mm a") : null);
    setSelectedTime(newValue);
    if (newValue) {
      onChange(newValue.format("HH:mm a"));
    }
    onBlur();
  };

  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal bg-cream1 text-dark-2 rounded-sm"
          )}
        >
        <Clock className="mr-2 h-4 w-4" />
          {selectedTime ? selectedTime.format("h:mm a") : <span>Pick a time</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-cream1 text-dark-1 shadow-md rounded-sm z-50">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            value={selectedTime}
            onChange={handleTimeChange}
            sx={{
                "& .MuiInputBase-root": {
                  height: "40px",
                  padding: "0px 30px",
                  fontSize: "1rem",
                  
                  backgroundColor: "inherit",
                  border: "none",
                  outline: "none",
                  width: "100%",
                  font: "inherit",
                  tracking: "widest",
                  borderRadius: "0",
                },
                "& .MuiMultiSectionDigitalClock-root": {
                  fontSize: "2rem",
                    color: "#dark-2",
                    backgroundColor: "#cream1",
                    font: "inherit",
                },
              }}
          />
        </LocalizationProvider>
      </PopoverContent>
    </Popover>
  );
}
