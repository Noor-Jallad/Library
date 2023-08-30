import bookModel from "./../../../../DB/model/Book.model.js";
export const getBooks = async (req, res, next) => {
  const books = await bookModel.find({});
  return res.status(200).json({ message: "All Books Returned", books });
};
export const getSpecificBook = async (req,res,next) => {
    const {bookId}=req.params;
    const book = await bookModel.findById(bookId);
    return res.status(200).json({ message: "Success",book});
  };
export const createBook = async (req, res, next) => {
  const { bookName, bookTitle, NumOfPages, status, price, edition } = req.body;
  if (await bookModel.findOne({ bookName })) {
    return next(
      new Error(`Book ${bookName} is already found!! `, { cause: 404 })
    );
  }
  const book = await bookModel.create({
    bookName,
    bookTitle,
    NumOfPages,
    status,
    price,
    edition,
  });
  return res.status(201).json({ message: "Success", book });
};

export const deleteBook = async (req, res, next) => {
  const { bookId } = req.params;
  const book = await bookModel.findById(bookId);
  if (!book) {
    return next(new Error(`Book is not found!! `, { cause: 404 }));
  }
  const bookDeleted = await bookModel.findByIdAndDelete(bookId, { new: true });
  return res.status(200).json({ message: "Success", bookDeleted });
};

export const updateBook = async (req, res, next) => {
  const { bookId } = req.params;
  const book = await bookModel.findById(bookId);
  if (!book) {
    return next(new Error(`Book is not found!! `, { cause: 404 }));
  }
  if (req.body.bookName) {
    book.bookName = req.body.bookName;
  }
  if (req.body.bookTitle) {
    book.bookTitle = req.body.bookTitle;
  }
  if (req.body.NumOfPages) {
    book.NumOfPages = req.body.NumOfPages;
  }
  if (req.body.status) {
    book.status = req.body.status;
  }
  if (req.body.price) {
    book.price = req.body.price;
  }
  if (req.body.edition) {
    book.edition = req.body.edition;
  }
  await book.save();
  return res.status(200).json({ message: "Success", book });
};
