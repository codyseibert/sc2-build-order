import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const buildsRouter = router({
  createBuild: publicProcedure
    .input(
      z.object({
        matchUp: z.string(),
        build: z.string(),
        style: z.string(),
        author: z.string().optional(),
        title: z.string().optional(),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const build = await ctx.prisma.buildOrder.create({
        data: {
          matchUp: input.matchUp,
          build: input.build,
          style: input.style,
          author: input.author,
          title: input.title,
          description: input.description,
        },
      });

      return build;
    }),
  incrementBuildOrderView: publicProcedure
  
  .input(z.object({ buildId: z.string() }))
  .mutation(async ({ input, ctx }) => {
    const build = await ctx.prisma.buildOrder.update({
      where: { id: input.buildId },
      data: {
        views: {
          increment: 1,
        },
      }
    });

    return build;
  }),
  getBuildsByMatchUp: publicProcedure
    .input(z.object({ matchUp: z.string() }))
    .query(async ({ ctx, input }) => {
      const builds = await ctx.prisma.buildOrder.findMany({
        where: {
          matchUp: input.matchUp,
        },
      });
      return builds;
    }),
  getBuildById: publicProcedure
    .input(z.object({ buildId: z.string() }))
    .query(async ({ ctx, input }) => {
      const build = await ctx.prisma.buildOrder.findUnique({
        where: {
          id: input.buildId,
        },
      });
      return build;
    }),
});
