import React from "react";

import "./App.css";

const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51Ys5yejqML._AC_SX184_.jpg",
    title: "Saint X: A novel",
    author: "Alex Schaitkin",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51KfSQWv8-L._AC_SX184_.jpg",
    title: "Grumpy Monkey",
    author: "Suzanne Lang, Max Lang",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41b86Pk3JkL._AC_SX184_.jpg",
    title: "Propsper's Demon",
    author: "K. J. Parker",
  },
];

export default function App() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <BookList key={book.id} {...book}></BookList>;
      })}
    </section>
  );
}

const BookList = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt=" " />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
