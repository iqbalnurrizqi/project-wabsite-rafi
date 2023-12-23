import React from "react";

const sizeClasses = {
  txtInterBold18: "font-bold font-inter",
  txtInterMedium20: "font-inter font-medium",
  txtInterRegular10: "font-inter font-normal",
  txtInterBold25: "font-bold font-inter",
  txtInterBold15: "font-bold font-inter",
  txtInterRegular13: "font-inter font-normal",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterBold15Gray100: "font-bold font-inter",
  txtInterBold35: "font-bold font-inter",
  txtDMSansBold1579: "font-bold font-dmsans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
