import { useEffect } from "react";
import { useHistory } from "react-router";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = (props) => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") history.push("/quotes");
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
