import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const param = useParams();
  return (
    <Fragment>
      <h1>Quote Detail Page </h1>
      <p>{param.quoteId}</p>
      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
