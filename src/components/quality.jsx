import React from "react";
import Badge from "react-bootstrap/Badge";

export const Quality = (props, onBookmarkChange) => {
  const quality = props.value.qualities;

  return quality.map((quality) => (
    <Badge key={quality._id} bg={quality.color} className="m-1">
      {quality.name}
    </Badge>
  ));
};
