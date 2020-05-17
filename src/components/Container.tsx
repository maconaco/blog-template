import * as React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default ({ children, className = "" }: Props): React.ReactElement => {
  return (
    <div
      className={clsx("w3-container", "w3-white", className)}
      style={{ margin: "auto" }}
    >
      {children}
    </div>
  );
};
