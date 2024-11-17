import type { ReadableAtom } from "nanostores";
import { getStore } from "./server.js";

export const shared = <A extends ReadableAtom<any>>(
  name: string,
  atom: A
): A => {
  const baseValue = atom.value;

  Object.defineProperty(atom, "value", {
    configurable: false,
    enumerable: true,
    get() {
      const store = getStore();
      if (!store.has(name)) {
        store.set(name, structuredClone(baseValue));
      }
      return store.get(name);
    },
    set(value) {
      const state = getStore();
      state.set(name, value);
    },
  });

  return atom;
};
