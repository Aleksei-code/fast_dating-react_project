import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Bookmark = (props) => {
  if (props.value === false) {
    return (
      <i
        onClick={() => {
          props.onBookmarkChange(props.id);
        }}
        className="bi bi-bookmark"
      ></i>
    );
  } else {
    return (
      <i
        onClick={() => {
          props.onBookmarkChange(props.id);
        }}
        className="bi bi-bookmark-fill"
      ></i>
    );
  }
};
