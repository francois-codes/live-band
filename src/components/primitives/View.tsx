import { flatten, mergeAll } from "ramda";
import { CSSProperties, FC, PropsWithChildren } from "react";

interface ViewProps {
  style: CSSProperties | CSSProperties[];
}

export const View: FC<PropsWithChildren<ViewProps>> = ({ style, children }) => {
  return <div style={mergeAll(flatten([style]))}>{children}</div>;
};
