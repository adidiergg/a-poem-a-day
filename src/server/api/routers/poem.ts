import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const poemRouter = createTRPCRouter({
  all: publicProcedure
    .query(async  ({ ctx }) => {
      
      const response  = await ctx.db.poems.findMany({
        relationLoadStrategy: "join",
        select:{
          id: true,
          title: true,
          content: true,
          author: true,
          tags : {
            select :{
              tag: {
                select:{
                  id: true,
                  name: true,
                }
              },
            }
          }
        },
        orderBy:{
          createdAt: "desc",
        },
        
      });

      return response;
    }),
  getPoemOfDay: publicProcedure
    .query(async ({ ctx }) => {
      const get_day = await ctx.db.$queryRaw<{poemId:string}[]>`SELECT "poemId" FROM "public"."Dailies" WHERE "day"=DATE_PART('doy', CURRENT_TIMESTAMP) LIMIT 1`;
      const response = await ctx.db.poems.findUnique({
        select:{
          id: true,
          title: true,
          content: true,
          author: true,
          tags : {
            select :{
              tag: {
                select:{
                  id: true,
                  name: true,
                }
              },
            }
          }
        },
        where:{
          id: get_day[0]?.poemId }
      }).catch((error) => {
        throw new Error("Poem not found");
        return null;
      });
      
      return response;
    }),
  getById: publicProcedure
    .input(z.object({id:z.string()}))
    .query(async ({ctx , input}) => {
      const response = await ctx.db.poems.findUnique({
        relationLoadStrategy: "join",
        select:{
          id: true,
          title: true,
          author: true,
          content: true,
          tags : {
            select :{
              tag: {
                select:{
                  id: true,
                  name: true,
                }
              },
            }
          }
        },
        where:{id:input.id}
      }).catch((error) => {
        throw new Error("Poem not found");
      });
     
      return response;
    }),
  
  getBookMarks: publicProcedure
    .input(z.object({bookmarks:z.array(z.string())}))
    .query(async ({ctx,input}) => {
      const response = await ctx.db.poems.findMany({
        where:{
          id:{ in: input.bookmarks} 
          }
      });
    }),

  addView: publicProcedure
    .input(z.object({id:z.string()}))
    .mutation(async ({ctx, input}) => {
      const response = await ctx.db.poems.update({
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
