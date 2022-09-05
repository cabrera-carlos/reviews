import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useState } from "react";
import reviews from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = reviews[index];

  function calcIndex(i) {
    if (i > reviews.length - 1) {
      return 0;
    }

    if (i < 0) {
      return reviews.length - 1;
    }

    return i;
  }

  function randomIndex() {
    let rand = Math.floor(Math.random() * reviews.length);

    if (rand === index) {
      rand = calcIndex(rand + 1);
    }

    return rand;
  }

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <article className="review">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="button-container">
            <button
              className="prev-btn"
              onClick={() => setIndex(calcIndex(index - 1))}
            >
              <FaChevronLeft />
            </button>
            <button
              className="next-btn"
              onClick={() => setIndex(calcIndex(index + 1))}
            >
              <FaChevronRight />
            </button>
          </div>
          <div className="button-container">
            <button
              className="random-btn"
              onClick={() => setIndex(randomIndex())}
            >
              surprise me
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
