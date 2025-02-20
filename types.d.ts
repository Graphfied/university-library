interface AuthCredentails {
  fullname: string;
  email: string;
  password: string;
  universityId: number;
  universityCard: string;
}

interface User {
  id: string;
  fullname: string;
  email: string;
  universityId: number;
  universityCard: string;
  status: string;
  role: string;
  lastActivityDate: Date;
  createdAt: Date;
}

interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  rating: number;
  totalQuantity: number;
  availableQuantity: number;
  coverColor: string;
  coverImage: string;
  videoUrl: string;
  summary: string;
  createdAt: Date;
}

interface BorrowedBook {
  id: string;
  userId: string;
  book: Book;
  borrowDate: Date;
  dueDate: string;
  returnDate: string;
  status: string;
}

interface BookParams {
  title: string;
  author: string;
  category: string;
  rating: number;
  coverImage: string;
  coverColor: string;
  summary: string;
  totalQuantity: number;
  videoUrl: string;
}

interface BorrowBookParams {
  bookId: string;
  userId: string;
}
