import { PrismaAdapter } from "@lucia-auth/adapter-prisma"
import prisma from "./prisma"
import { Lucia } from "lucia"
import { IS_PRODUCTION } from "@/configs"

const adapter = new PrismaAdapter(prisma.session, prisma.user)

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: IS_PRODUCTION,
    },
  },
})

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia
  }
}
