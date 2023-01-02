import type { ReactNode } from "react";
import React from "react";

export const Label = ({
  children,
  htmlFor,
}: {
  children: ReactNode;
  htmlFor: string;
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
    >
      {children}
    </label>
  );
};
