import React, { useState, useRef, useEffect } from 'react';

interface DateTimePickerProps {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  onBlur: () => void;
  name: string;
}

export function MyDateTimePicker({ value, onChange, onBlur }: DateTimePickerProps) {
  const [open, setOpen] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [year, month, day] = e.target.value.split('-').map(Number);
    if (value) {
      const newDate = new Date(value);
      newDate.setFullYear(year);
      newDate.setMonth(month - 1);
      newDate.setDate(day);
      onChange(newDate);
    } else {
      onChange(new Date(year, month - 1, day));
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [hours, minutes] = e.target.value.split(':').map(Number);
    if (value) {
      const newDate = new Date(value);
      newDate.setHours(hours);
      newDate.setMinutes(minutes);
      onChange(newDate);
    } else {
      const newDate = new Date();
      newDate.setHours(hours);
      newDate.setMinutes(minutes);
      onChange(newDate);
    }
  };

  const togglePopover = () => {
    setOpen(!open);
    if (!open) {
      onBlur();
    }
  };

  useEffect(() => {
    if (open && dateInputRef.current) {
      dateInputRef.current.focus();
    }
  }, [open]);

  const formatDateTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={togglePopover}
        className="flex h-10 w-full rounded-sm border border-input text-dark-1 bg-cream1 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
        {value ? (
            <span>{formatDateTime(value)}</span>
        ) : (
            <span className="text-muted-custom">Pick a date and time</span>
        )}
      </button>

      {open && (
        <div className="absolute bg-dark-2 rounded-sm mt-2 p-4 w-72 z-10">
            <div>
            <label className="block mb-1 text-sm">Date</label>
            <input
              type="date"
              ref={dateInputRef}
              value={value ? format(value, "yyyy-MM-dd") : ""}
              onChange={handleDateChange}
              className="w-full border bg-cream1 text-dark-1 rounded-sm p-2"
              autoFocus
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Time</label>
            <input
              type="time"
              value={value ? format(value, "HH:mm") : ""}
              onChange={handleTimeChange}
              className="w-full border bg-cream1 text-dark-1 rounded-sm p-2"
            />
          </div>
          <button
            type="button"
            onClick={togglePopover}
            className="mt-4 bg-cream1 text-dark-1 rounded-sm p-2 w-full"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}

function format(date: Date, formatStr: string): string {
  const options: Intl.DateTimeFormatOptions = {};

  switch (formatStr) {
    case 'yyyy-MM-dd':
      return date.toISOString().split('T')[0];
    case 'HH:mm':
      return date.toTimeString().split(' ')[0].slice(0, 5);
    default:
      break;
  }

  return new Intl.DateTimeFormat('en-US', options).format(date);
}
