declare type ResponsiveSpecs<T> = {
  mobile: T;
  tablet?: T;
  desktop: T;
};

declare type TableType<T extends Record<string, ColumnType>> = {
  id: string;
  created_at: string;
} & T;

type Song = TableType<{
  title: string;
  author: string;
  key: string;
  tags: string;
  lines: string[];
}>;

type Playlist = TableType<{
  name: string;
  type: "global" | "session";
  songs: string[];
}>;

type Session = TableType<{
  name: string;
  active: boolean;
}>;

interface ScaledSize {
  width: number;
  height: number;
  scale: number;
  fontScale?: number;
}

declare module "utils";

declare type KEY_VALUES = import("./lib/consts").KEYS;

declare type ModifierKey = "meta" | "ctrl" | "shift" | "alt";

declare type ModifierKeyProp = `${modifier}Key`;

declare interface IShortcut {
  key: KEY_VALUES;
  modifiers: ModifierKey[];
  matches(event: KeyboardEvent): boolean;
  get label(): string;
}

declare type Maybe<T> = T | undefined | null;

declare type Nullable<T> = T | null;

declare type MaybeArray<T> = T | T[];

declare type MaybePromise<T> = T | Promise<T>;

declare type ValueOf<T> = T[keyof T];
