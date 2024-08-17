import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const poemRouter = createTRPCRouter({
  all: publicProcedure
    .query(async ({ ctx }) => {
      const response = await ctx.db.poems.findMany({
        relationLoadStrategy: "join",
        select: {
          id: true,
          title: true,
          content: true,
          author: true,
          tags: {
            select: {
              tag: {
                select: {
                  id: true,
                  name: true,
                }
              },
            }
          }
        },
        orderBy: {
          views: "asc",
        },
      });

      return response;
    }),
  getPoemOfDay: publicProcedure
    .query(async ({ ctx }) => {
      const get_day = await ctx.db.$queryRaw<{ poemId: string }[]>`SELECT "poemId" FROM "public"."Dailies" WHERE "day"=DATE_PART('doy', CURRENT_TIMESTAMP) LIMIT 1`;
      const response = await ctx.db.poems.findUnique({
        select: {
          id: true,
          title: true,
          content: true,
          author: true,
          tags: {
            select: {
              tag: {
                select: {
                  id: true,
                  name: true,
                }
              },
            }
          }
        },
        where: {
          id: get_day[0]?.poemId
        }
      }).catch((error) => {
        throw new Error("Poem not found");
        return null;
      });

      return response;
    }),
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const response = await ctx.db.poems.findUnique({
        relationLoadStrategy: "join",
        select: {
          id: true,
          title: true,
          author: true,
          content: true,
          tags: {
            select: {
              tag: {
                select: {
                  id: true,
                  name: true,
                }
              },
            }
          }
        },
        where: { id: input.id }
      }).catch((error) => {
        throw new Error("Poem not found");
      });

      return response;
    }),

  getBookMarks: publicProcedure
    .input(z.object({ bookmarks: z.array(z.object({ id: z.string() })) }))
    .query(async ({ ctx, input }) => {
      const list_bookmarks = input.bookmarks.map((bookmark) => bookmark.id);
      const response = await ctx.db.poems.findMany({
        select: {
          id: true,
          title: true,
          author: true,
        },
        where: {
          id: { in: list_bookmarks }
        }
      });

      return response;
    }),
  getRecommendations: publicProcedure
    .input(z.object({ visited: z.array(z.object({ id: z.string() })) }))
    .query(async ({ ctx, input }) => {

      const list_visited = input.visited.map((visit) => visit.id);
      if (list_visited.length === 0) {
        const response = await ctx.db.poems.findMany({
          relationLoadStrategy: "join",
          take: 10,
          select: {
            id: true,
            title: true,
            author: true,
            tags: {
              select: {
                tag: {
                  select: {
                    id: true,
                    name: true,
                  }
                },
              }
            }
          },
          orderBy: {
            views: "desc",
          }
        });
        return response;

      } else {
        const response = await ctx.db.recommendations.findMany({
          relationLoadStrategy: "join",
          orderBy: {
            score: "asc",
          },
          distinct: ['postRecommendId'],
          take: 30,
          select: {

            poemRecommend: {
              select: {
                id: true,
                title: true,
                content: true,
                author: true,
                tags: {
                  select: {
                    tag: {
                      select: {
                        id: true,
                        name: true,
                      }
                    },
                  }
                }
              }
            }
          },
          where: {
            postId: { in: list_visited },
            postRecommendId: { notIn: list_visited }
          }
        })
        return response.map((poem) => poem.poemRecommend);
      }
    }),

  addView: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const response = await ctx.db.poems.update({
        where: { id: input.id },
        data: {
          views: {
            increment: 1,
          }
        }
      });
      return response;

    }),
  getPoems: publicProcedure
    .input(z.object({ page: z.number(),search: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      let page = input.page;
      if (page <= 0) {
        page = 1;
      }
      const limit = 10;
      const totalPoems = await ctx.db.poems.count({where:{
        OR: [
        {title:{
          contains:input.search,
          mode: 'insensitive'
        }},
        {author:{
          contains:input.search,
          mode: 'insensitive'
        }},
        ],
      }});
      const totalPages = Math.ceil(totalPoems / limit);
      const offset = (page - 1) * limit;
      const results = await ctx.db.poems.findMany({
        skip: offset,
        take: limit,
        select: {
          id: true,
          title: true,
          author: true,
          tags: {
            select: {
              tag: {
                select: {
                  id: true,
                  name: true,
                }
              },
            }
          }
        },
        where:{
          OR: [
          {title:{
            contains:input.search,
            mode: 'insensitive'
          }},
          {author:{
            contains:input.search,
            mode: 'insensitive'
          }},
          ],
        },
        orderBy: {
          title: "asc",
        }
      })

      return { results, totalPages };
    }),
  getRelationshipsPoem: publicProcedure
    .input(z.object({id:z.string().optional()}))
    .query(async ({ ctx,input }) => {
      const response = await ctx.db.recommendations.findMany({
        relationLoadStrategy: "join",
        orderBy:{
          score: "asc",
        },
        distinct: ['postRecommendId'],
        select:{
          
          poemRecommend:{
            select:{
              id: true,
              title: true,
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
            }
          }
        },
        where:{
          postId: input.id,
        }
      })
      return response.map((poem) => poem.poemRecommend);
    })
});

/*
  getPoems : publicProcedure
      .input(z.object({page:z.number()}))
      .query(async ({ctx}) => {
        const response = await ctx.db.poems.count();
        return response;
    }),
  

*/