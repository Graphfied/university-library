import { auth } from "@/auth";
import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";

import { db } from "@/database/drizzle";
import { books } from "@/database/schema";

const Home = async () => {
  const session = await auth();

  const latestBooks = (await db.select().from(books).limit(10)) as Book[];

  return (
    <>
      <BookOverview {...latestBooks[0]} userId={session?.user?.id as string} />

      <BookList
        title="Latest Books"
        books={latestBooks}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
