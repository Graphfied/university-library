import Book from "@/components/book";
import BookOverview from "@/components/book/Overview";
import { sampleBooks } from "@/constants";

const Home = async () => {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />

      <section className="mt-28">
        <h2 className="font-bebas-neue text-4xl text-light-100">
          Latest Books
        </h2>

        <ul className="flex gap-10 flex-wrap mt-10">
          {sampleBooks.map((item) => (
            <Book key={item.title} {...item} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
