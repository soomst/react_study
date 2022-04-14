import { Fragment } from "react";
import { Redirect, Route, useParams } from "react-router";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is greate!" },
  { id: "q3", author: "soom", text: "Learning React is awesome!" },
  { id: "q4", author: "Soom", text: "Learning React is himderu!" },
  { id: "q5", author: "resoom", text: "Learning React is wow!" },
  { id: "q6", author: "soomst", text: "Learning React is amazing!" },
];

const QuoteDetail = () => {
  const param = useParams();

  const quotesData = DUMMY_QUOTES.find((quote) => param.quoteId === quote.id);

  return (
    <Fragment>
      {quotesData ? (
        <HighlightedQuote
          text={quotesData.text}
          author={quotesData.author}
          id={param.quoteId}
        />
      ) : (
        <Redirect to="/*" />
      )}

      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
