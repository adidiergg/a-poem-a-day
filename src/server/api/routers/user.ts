import { z } from "zod";
import { signUpSchema } from "~/lib/validations/auth";
import { hashPassword } from "~/lib/utils";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";



export const userRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  createUser: publicProcedure
    .input(signUpSchema)
    .mutation(async ({ ctx, input }) => {
      const password = hashPassword(input.password);
      try {
        const account = await ctx.db.user.create({
          data: {
            name: input.name,
            email: input.email,
            password: password,
          }

        });
        return account;      
      } catch (e) {
        if(e instanceof Prisma.PrismaClientKnownRequestError) {
          if(e.code === 'P2002') {
            throw new TRPCError({
              code: 'PARSE_ERROR',
              message: 'User already exists',
            })
          }
          console.log(e);
        }
      }

    }),
});
