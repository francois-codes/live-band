import { CSSProperties, useMemo } from "react";
import { responsiveValue, theme } from "./theme";
import { Dimensions } from "@/lib/dimensions";
import { useWindowDimensions } from "@/lib/dimensions/useWindowDimensions";

const StyleSheet = {
  create: (styles: Record<string, CSSProperties>) => styles
};

type StyleCreator = (arg: {
  theme: ReturnType<typeof theme>;
  dimensions: ScaledSize;
  responsiveValue: <T>(specs: ResponsiveSpecs<T>) => T;
}) => Record<string, CSSProperties>;

export function createStyles(styleCreator: StyleCreator) {
  const dimensions = Dimensions.get("window");
  return StyleSheet.create(
    styleCreator({
      theme: theme(dimensions),
      dimensions,
      responsiveValue: (specs) => responsiveValue(specs, dimensions)
    })
  );
}

export function useCreateStyles(styleCreator: StyleCreator, deps = []) {
  const dimensions = useWindowDimensions();

  return useMemo(
    () =>
      StyleSheet.create(
        styleCreator({
          theme: theme(dimensions),
          dimensions,
          responsiveValue: (specs) => responsiveValue(specs, dimensions)
        })
      ),
    [dimensions.width, ...deps]
  );
}

export function useResponsiveValue<T>(specs: ResponsiveSpecs<T>) {
  const dimensions = useWindowDimensions();
  return useMemo(() => responsiveValue(specs, dimensions), [dimensions.width]);
}

export const getResponsiveValue = responsiveValue;

export { colors, spacings, borders } from "./theme";
