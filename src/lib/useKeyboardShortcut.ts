import { useCallback, useEffect } from "react";
import { keyboardShortcut } from "./shortcut";
import { forceArray } from "@/lib";

export function useKeyboardShortcut(
  {
    key,
    shortcuts,
    modifier = [],
    handler,
    preventDefault = false
  }: {
    key?: MaybeArray<KEY_VALUES>;
    modifier?: MaybeArray<ModifierKey>;
    shortcuts?: MaybeArray<IShortcut>;
    handler: (event: KeyboardEvent) => void;
    preventDefault?: boolean;
  },
  deps: unknown[] = []
) {
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (!key && !shortcuts) {
      return handler(event);
    }

    const shortcutsToMatch = shortcuts
      ? forceArray<IShortcut>(shortcuts)
      : forceArray<KEY_VALUES>(key as MaybeArray<KEY_VALUES>).map((k) =>
          keyboardShortcut(k, ...forceArray<ModifierKey>(modifier))
        );

    if (shortcutsToMatch.some((shortcut) => shortcut.matches(event))) {
      handler(event);
    }
  }, deps);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, deps);
}
