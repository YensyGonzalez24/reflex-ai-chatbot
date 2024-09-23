"use client";

import { FC, PropsWithChildren } from "react";

interface ButtonProps {
  handleOnClick?: () => void;
  variant?: "primary" | "secondary";
  isDisabled?: boolean;
  type?: "button" | "submit";
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = "primary",
  isDisabled = false,
  type = "button",
  handleOnClick,
}) => {
  const variantClasses = {
    primary: "border-ct-dark text-black bg-ct-light",
    secondary: "border-ct-dark text-ct-dark",
    disabled: "border-ct-white text-ct-white cursor-not-allowed",
  };

  return (
    <button
      type={type}
      className={`border-2 ${
        variantClasses[isDisabled ? "disabled" : variant]
      } p-2 rounded-lg mt-4 w-full `}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export { Button };
