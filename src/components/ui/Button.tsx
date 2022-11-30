import React from "react";
import { cva, VariantProps } from "class-variance-authority";
const buttonStyles = cva(
  "flex items-center gap-2 p-2 rounded-md transition ease-in-out text-sm font-medium",
  {
    variants: {
      intent: {
        primary: "bg-sky-300 hover:bg-sky-300/90 text-gray-700",
        secondary: "bg-slate-700 hover:bg-slate-700/90",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);
type ButtonVariantProps = VariantProps<typeof buttonStyles>;
interface ButtonProps extends ButtonVariantProps {
  children: React.ReactNode;
}
const Button = ({ intent, children, ...rest }: ButtonProps) => {
  return <button className={buttonStyles({ intent })}>{children}</button>;
};

export default Button;
