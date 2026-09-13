import type { ComponentProps } from "react";

import { RiLoaderLine } from "@remixicon/react";

import { cn } from "@/styles/utils";

function Spinner({
  className,
  ...props
}: Omit<ComponentProps<"svg">, "children">) {
  return (
    <RiLoaderLine
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

export { Spinner };
