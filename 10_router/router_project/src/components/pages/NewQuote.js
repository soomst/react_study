import { useHistory } from "react-router";
import QuoteForm from "../quotes/QuoteForm";

const NewQuote = (props) => {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
