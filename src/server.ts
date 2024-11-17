import { AsyncLocalStorage } from "node:async_hooks";
import { uneval } from "devalue";
import type { MiddlewareHandler } from "astro";

const storage = new AsyncLocalStorage();

export function getStore() {
  const store = storage.getStore();
  if (store instanceof Map) {
    return store;
  }

  console.warn(
    "[@kewka/astro-nanostores] Store is not provided. Please add 'nanostoresMiddleware' to your 'src/middleware.ts' file before using this library."
  );

  return new Map();
}

export function getNanostoresScript() {
  return `window.__ASTRO_NANOSTORES__ = ${uneval(getStore())};`;
}

export const nanostoresMiddleware: MiddlewareHandler = (_, next) => {
  return storage.run(new Map(), next);
};
