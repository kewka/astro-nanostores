import { atom } from "nanostores";
import { shared } from "@kewka/astro-nanostores";

export const $count = shared("count", atom(0));

export function increment() {
  $count.set($count.get() + 1);
}

export function decrement() {
  $count.set($count.get() - 1);
}
