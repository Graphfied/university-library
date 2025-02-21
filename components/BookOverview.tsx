import Image from "next/image";

import BookCover from "./BookCover";
import BorrowBook from "./BorrowBook";

interface Props extends Book {
  userId: string;
}

const BookOverview = ({
  id,
  title,
  author,
  category,
  rating,
  totalQuantity,
  availableQuantity,
  summary,
  coverColor,
  coverImage,
  userId,
}: Props) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>

        <div className="book-info">
          <p>
            By <span className="font-semibold text-light-200">{author}</span>
          </p>

          <p>
            Category: <span className="ml-2 text-primary">{category}</span>
          </p>

          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
            <p>{rating}</p>
          </div>
        </div>

        <div className="book-copies">
          <p>
            Total Books: <span>{totalQuantity}</span>
          </p>

          <p>
            Available Books: <span>{availableQuantity}</span>
          </p>
        </div>

        <p className="book-description">{summary?.slice(0, 200)}...</p>

        <BorrowBook bookId={id} userId={userId} />
      </div>

      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={coverColor}
            coverImage={coverImage}
          />

          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover
              variant="wide"
              coverColor={coverColor}
              coverImage={coverImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
