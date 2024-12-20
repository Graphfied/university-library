import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import BookCover from "./Cover";
import { Button } from "../ui/button";

interface Props {
  isLoanedBook?: boolean;
  coverColor?: string;
  cover?: string;
}

const Book = ({ isLoanedBook = false }: Props) => {
  return (
    <li>
      <Link
        href="/books/1"
        className={cn(isLoanedBook && "w-52 flex flex-col items-center")}
      >
        <BookCover />

        <div className={cn("mt-4", !isLoanedBook && "max-w-40")}>
          <p className="text-xl mt-2 font-semibold text-white line-clamp-2">
            Origin - By Dan Brown
          </p>
          <p className="text-light-200 mt-1 text-base italic line-clamp-1">
            Thriller / Mystery
          </p>
        </div>

        {isLoanedBook && (
          <div className="mt-3 w-full">
            <div className="flex flex-row gap-1 items-center">
              <Image
                src="/icons/calendar.svg"
                alt="calendar"
                width={18}
                height={18}
                className="object-contain"
              />

              <p className="text-bae text-light-200">11 days left to due</p>
            </div>

            <Button className="gradient-gray min-h-14 text-primary text-base font-bebas-neue w-full mt-3">
              Download receipt
            </Button>
          </div>
        )}
      </Link>
    </li>
  );
};

export default Book;
