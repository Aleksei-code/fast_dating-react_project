import React from "react";
import BookMark from "./bookmark";
import Quality from "./quality";

export const User = ({
  _id,
  name,
  bookmark,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDelete,
  onBookmarkChange,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((qual) => (
          <Quality {...qual} key={qual._id} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate} /5</td>
      <td>
        <BookMark status={bookmark} onClick={() => onBookmarkChange(_id)} />
      </td>
      <td>
        <button onClick={() => onDelete(_id)} className="btn btn-danger">
          delete
        </button>
      </td>
    </tr>
  );
};
