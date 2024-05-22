// time-picker-wrapper.tsx
"use client";

import { useState } from "react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';

interface TimePickerWrapperProps {
  value: string;
  onChange: (time: string) => void;
  onBlur: () => void;
  name: string;
}

export function TimePickerWrapper({ value = '', onChange, onBlur }: TimePickerWrapperProps) {
  const [selectedTime, setSelectedTime] = useState(value ? dayjs(value, 'HH:mm') : null);

  const handleTimeChange = (newValue: any) => {
    setSelectedTime(newValue);
    if (newValue) {
      onChange(newValue.format('HH:mm'));
    }
    onBlur();
  };

  return (
    <div className="w-full h-10 flex items-center space-x-2 font-garamond bg-cream1 text-dark-2 rounded-sm">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          value={selectedTime}
          onChange={handleTimeChange}
          sx={{
            "& .MuiInputBase-root": {
              height: "100%",
              padding: "0 10px",
              fontSize: "1rem",
              color: "inherit",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              width: "100%",
            }
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
