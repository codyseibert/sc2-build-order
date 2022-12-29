import { router } from "../trpc";
import { authRouter } from "./auth";
import { buildsRouter } from "./buildsRouter";
import { exampleRouter } from "./example";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  builds: buildsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
