import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost" | "link";
  size?: "icon";
}

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded ${variant === "ghost" ? "bg-transparent" : "bg-blue-500 text-white"} ${className}`}
      {...props}
    />
  );
}
