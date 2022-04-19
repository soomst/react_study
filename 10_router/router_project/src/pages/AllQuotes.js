import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQoutesFound from "../components/quotes/NoQuotesFound";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "Max", text: "Learning React is fun!" },
//   { id: "q2", author: "Maximilian", text: "Learning React is greate!" },
//   { id: "q3", author: "soom", text: "Learning React is awesome!" },
//   { id: "q4", author: "Soom", text: "Learning React is himderu!" },
//   { id: "q5", author: "resoom", text: "Learning React is wow!" },
//   { id: "q6", author: "soomst", text: "Learning React is amazing!" },
// ];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQoutesFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
