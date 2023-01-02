import React from "react";
import classNames from "classnames";

export enum Variant {
  Danger = "danger",
  Success = "success",
  Warning = "warning",
  Primary = "primary",
}

export const Badge = ({
  variant,
  text,
}: {
  variant: Variant;
  text: string;
}) => {
  const styles = {
    danger: "text-red-800 bg-red-100",
    success: "text-green-800 bg-green-100",
    warning: "text-yellow-800 bg-yellow-100",
    primary: "text-blue-800 bg-blue-100",
  };

  return (
    <span
      className={classNames(
        "mr-2 rounded px-2.5 py-0.5 text-xs font-semibold",
        styles[variant]
      )}
    >
      {text}
    </span>
  );
};
