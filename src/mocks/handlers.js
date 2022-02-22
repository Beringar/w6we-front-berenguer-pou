import { rest } from "msw";

export const handlers = [
  rest.get(
    `${process.env.REACT_APP_HEROKKU_API_URL}robots`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          { id: 1, name: "robot1" },
          { id: 2, name: "robot2" },
        ])
      );
    }
  ),
  rest.get(
    `${process.env.REACT_APP_HEROKKU_API_URL}robots/3`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ id: 3, name: "robot3" }));
    }
  ),
  rest.delete(
    `${process.env.REACT_APP_HEROKKU_API_URL}robots/15`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ id: 15 }));
    }
  ),
];
