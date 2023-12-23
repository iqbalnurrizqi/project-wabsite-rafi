import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[18px]" };
const variants = {
  outline: {
    white_A700: "border border-solid border-white-A700 text-white-A700",
  },
  fill: {
    amber_600: "bg-amber-600 text-black-900",
    amber_300: "bg-amber-300 text-gray-900",
    gray_200: "bg-gray-200 text-black-900",
  },
};
const sizes = { xs: "p-[5px]", sm: "pl-3.5 pr-[13px] py-3.5", md: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "gray_200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["white_A700", "amber_600", "amber_300", "gray_200"]),
};

export { Button };
