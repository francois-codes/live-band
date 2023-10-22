import React, { CSSProperties, ReactNode } from "react";
import { View } from "@/components/primitives";
import { createStyles } from "@/theme";

type Props = {
  children: ReactNode;
  style?: CSSProperties;
};

const styles = createStyles(({ theme }) => ({
  container: theme.views.container({
    minWidth: "100vw",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center"
  })
}));

export function Container({ children, style = {} }: Props) {
  return <View style={[styles.container, style]}>{children}</View>;
}
