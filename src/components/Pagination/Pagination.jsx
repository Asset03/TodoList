const Pagination = ({ page, setPage, totalPages }) => {
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);
  const maxVisible = 3;

  const toPrevious = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const toNext = () => {
    if (page !== pageNumbers.length) {
      setPage(page + 1);
    }
  };

  const renderPageNumbers = () => {
    if (totalPages <= maxVisible) {
      return pageNumbers.map((el) => (
        <p
          key={el}
          className={page === el ? "page_active" : ""}
          onClick={() => setPage(el)}
        >
          {el}
        </p>
      ));
    } else {
      const start = Math.max(1, page - Math.floor(maxVisible / 2));
      const end = Math.min(pageNumbers.length, start + maxVisible - 1);

      const pages = [];
      if (start > 1) {
        pages.push(
          <p key={1} onClick={() => setPage(1)}>
            1
          </p>,
          <p key="ellipsis-start">...</p>
        );
      }

      for (let i = start; i <= end; i++) {
        pages.push(
          <p
            key={i}
            className={page === i ? "page_active" : ""}
            onClick={() => setPage(i)}
          >
            {i}
          </p>
        );
      }

      if (end < pageNumbers.length) {
        pages.push(
          <p key="ellipsis-end">...</p>,
          <p key={pageNumbers.length} onClick={() => setPage(pageNumbers.length)}>
            {pageNumbers.length}
          </p>
        );
      }

      return pages;
    }
  };

  return (
    <div className="pagination">
      <p onClick={toPrevious}>{"<"}</p>
      {renderPageNumbers()}
      <p onClick={toNext}>{">"}</p>
    </div>
  );
};

export default Pagination;
