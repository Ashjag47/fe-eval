/* eslint-disable import/no-unresolved */
import React from "react";
import { useParams } from "react-router-dom";
// import "./error.css";

function Error() {
  const { errorCode } = useParams();
  return (
    <div>
      error
      <div className="errorContainer">
        <p>Something went wrong!</p>
        {errorCode && <p>{`Error code: ${errorCode}`}</p>}
      </div>
    </div>
  );
}

export default Error;
