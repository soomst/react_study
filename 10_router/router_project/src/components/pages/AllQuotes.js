import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is greate!" },
  { id: "q3", author: "soom", text: "Learning React is awesome!" },
  { id: "q4", author: "Soom", text: "Learning React is himderu!" },
  { id: "q5", author: "resoom", text: "Learning React is wow!" },
  { id: "q6", author: "soomst", text: "Learning React is amazing!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
