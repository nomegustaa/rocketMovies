import { ReactNode } from "react";

export interface IButton extends React.ComponentProps<"div"> {
  background: string;
  width: string;
  height: string;
  icon?: ReactNode;
  isLoading?: boolean;
}
