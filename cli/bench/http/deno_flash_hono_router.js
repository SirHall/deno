// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { Hono } from "https://deno.land/x/hono@v2.0.9/mod.ts";

const addr = Deno.args[0] || "127.0.0.1:4500";
const [hostname, port] = addr.split(":");

const app = new Hono();
app.get("/", (c) => c.text("Hello, World!"));

Deno.serve({ fetch: app.fetch, port: Number(port), hostname });
