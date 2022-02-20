import { rest } from "msw";
import type { RequestHandler } from "msw";

import data from "./data.json";

export const handlers: Array<RequestHandler> = [
  rest.get(`/api/list`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];
