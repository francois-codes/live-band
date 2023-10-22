import { CSSProperties, FC, PropsWithChildren } from "react";

interface TextProps {
  style: CSSProperties;
}

export const Text: FC<PropsWithChildren<TextProps>> = ({ style, children }) => {
  return <Text style={style}>{children}</Text>;
};
