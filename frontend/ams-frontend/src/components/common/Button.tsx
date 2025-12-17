import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="
        w-full
        bg-brand-primary
        text-white
        py-2
        px-4
        rounded-md
        font-medium
        hover:bg-brand-accent
        transition
        duration-200
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
