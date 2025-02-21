import { eq } from "drizzle-orm";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import Sidebar from "@/components/admin/Sidebar";

const AdminLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (!session?.user?.id) redirect("/sign-in");

  const isAdmin = await db
    .select({
      isAdmin: users.role,
    })
    .from(users)
    .where(eq(users.id, session.user?.id))
    .limit(1)
    .then((res) => res[0].isAdmin === "ADMIN");

  if (!isAdmin) redirect("/");

  return (
    <main className="flex min-h-screen w-full flex-row">
      <Sidebar />

      <div className="flex w-[calc(100%-264px)] flex-1 flex-col bg-light-300 p-5 xs:p-10">
        {children}
      </div>
    </main>
  );
};

export default AdminLayout;
