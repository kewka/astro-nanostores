import { sequence } from "astro:middleware";
import { nanostoresMiddleware } from "@kewka/astro-nanostores/server";

export const onRequest = sequence(nanostoresMiddleware);
