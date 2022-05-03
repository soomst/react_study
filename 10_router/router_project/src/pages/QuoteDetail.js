import { Fragment, useEffect } from "react";
import {
  Redirect,
  Route,
  useParams,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { getSingleQuote } from "../lib/api";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "Max", text: "Learning React is fun!" },
//   { id: "q2", author: "Maximilian", text: "Learning React is greate!" },
//   { id: "q3", author: "soom", text: "Learning React is awesome!" },
//   { id: "q4", author: "Soom", text: "Learning React is himderu!" },
//   { id: "q5", author: "resoom", text: "Learning React is wow!" },
//   { id: "q6", author: "soomst", text: "Learning React is amazing!" },
// ];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: quotesData,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!quotesData.author && !quotesData.text) {
    return <p className="centered">No Quote Found!</p>;
  }

  return (
    <Fragment>
      {quotesData ? (
        <>
          <HighlightedQuote
            text={quotesData.text}
            author={quotesData.author}
            id={params.quoteId}
          />
          <Route path={`${match.path}`} exact>
            <div className="centered">
              <Link className="btn--flat" to={`${match.url}/comments`}>
                Load Comments
              </Link>
            </div>
          </Route>
        </>
      ) : (
        <Redirect to="/*" />
      )}

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
