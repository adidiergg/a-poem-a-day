import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const poemRouter = createTRPCRouter({
  all: publicProcedure
    .query(async  ({ ctx }) => {
      
      const response  = await ctx.db.poem.findMany({
        select:{
          id: true,
          title: true,
          author: true,
          content: true,
          createdAt: true,
        },
        orderBy:{
          createdAt: "desc",
        },
      });
      return response;
    }),
  getLatest: publicProcedure
    .query(async ({ ctx }) => {
      const response = await ctx.db.poem.findMany({
        orderBy:{createdAt: "desc"},
        take:1,
      });
      if(response.length){
        return response[0];
      }
      return undefined;
    }),
  getById: publicProcedure
    .input(z.object({id:z.number()}))
    .query(async ({ctx , input}) => {
      console.log(input.id,"aqui nene");
      const response = await ctx.db.poem.findUnique({
        where:{id:input.id}
      });
     
      return response;
    }),
  addView: publicProcedure
    .input(z.object({id:z.number()}))
    .mutation(async ({ctx, input}) => {
      const response = await ctx.db.poem.update({
        where:{id:input.id},
        data:{
          views:{
            increment:1,
          }
        }
      });
      return response;

    }),

  // create: protectedProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     // simulate a slow db call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     return ctx.db.post.create({
  //       data: {
  //         name: input.name,
  //         createdBy: { connect: { id: ctx.session.user.id } },
  //       },
  //     });
  //   }),

  // getLatest: protectedProcedure.query(({ ctx }) => {
  //   return ctx.db.post.findFirst({
  //     orderBy: { createdAt: "desc" },
  //     where: { createdBy: { id: ctx.session.user.id } },
  //   });
  // }),

  // getSecretMessage: protectedProcedure.query(() => {
  //   return "you can now see this secret message!";
  // }),
});
