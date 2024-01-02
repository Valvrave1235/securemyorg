// file : ./src/lib/utils.js

import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString) {
  const event = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const day = event.getDate();
  const suffix = ["th", "st", "nd", "rd"][
    ((day % 100) - 20) % 10] || "th";
  const month = event.toLocaleDateString('en-GB', { month: 'short' });
  const year = event.getFullYear();

  return `${day}${suffix} ${month}, ${year}`;
}