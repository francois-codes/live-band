import { KEY_LABELS } from "./consts";

const getModifierProp: (modifier: ModifierKey) => ModifierKeyProp = (
  modifier: ModifierKey
) => `${modifier}Key`;

class Shortcut implements IShortcut {
  key: KEY_VALUES;
  modifiers: ModifierKey[];

  constructor(key: KEY_VALUES, modifiers?: ModifierKey[]) {
    this.key = key;
    this.modifiers = modifiers ?? [];
  }

  get label(): string {
    if (this.modifiers.length === 0) return KEY_LABELS[this.key];

    return `${this.modifiers.map((m) => KEY_LABELS[m]).join(" + ")} + ${
      KEY_LABELS[this.key]
    }`;
  }

  matches(event: KeyboardEvent): boolean {
    return this.modifiersMatch(event) && event.key === this.key;
  }

  private modifiersMatch(event: KeyboardEvent): boolean {
    if (this.modifiers.length === 0) return true;

    return this.modifiers.every(
      (modifier) =>
        event[
          getModifierProp(modifier) as
            | "ctrlKey"
            | "shiftKey"
            | "altKey"
            | "metaKey"
        ]
    );
  }
}

export const keyboardShortcut = (
  key: KEY_VALUES,
  ...modifiers: ModifierKey[]
): Shortcut => {
  return new Shortcut(key, modifiers);
};
