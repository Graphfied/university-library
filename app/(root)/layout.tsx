import { eq } from "drizzle-orm";
import { ReactNode } from "react";
import { after } from "next/server";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { db } from "@/database/drizzle";
import Header from "@/components/Header";
import { users } from "@/database/schema";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (!session) redirect("/sign-in");

  after(async () => {
    if (!session?.user?.id) return;

    await db
      .update(users)
      .set({ lastActivityDate: new Date().toISOString().slice(0, 10) })
      .where(eq(users.id, session?.user?.id));
  });

  return (
    <main className="root-container">
      <div className="mx-auto w-full max-w-7xl">
        <Header />

        <div className="mt-20 w-full pb-20">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
