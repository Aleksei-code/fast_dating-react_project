import React from "react";
import _ from "lodash";

const Pagination = ({ totalUsers, pageSize, onPageChange, currentPage }) => {
  const totalPages = Math.ceil(totalUsers / pageSize);
  const pages = _.range(1, totalPages + 1);
  if (totalPages === 1) {
    return null;
  }
  console.log(currentPage);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li className="page-item" key={page}>
            <a
              href={page}
              className={"page-link" + (page === currentPage ? " active" : "")}
              onClick={() => {
                onPageChange(page, totalPages);
              }}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
