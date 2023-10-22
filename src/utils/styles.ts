import { CSSProperties } from "react";

export const paddingHorizontal = (value: number): CSSProperties => ({
  paddingLeft: value,
  paddingRight: value
});

export const paddingVertical = (value: number): CSSProperties => ({
  paddingTop: value,
  paddingBottom: value
});

export const marginHorizontal = (value: number): CSSProperties => ({
  marginLeft: value,
  marginRight: value
});

export const marginVertical = (value: number): CSSProperties => ({
  marginTop: value,
  marginBottom: value
});
