function Pagination({
  page,
  totalResults,
  onPrevious,
  onNext,
}) {
  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="d-flex justify-content-center gap-3 mt-4 mb-5">

      <button
        className="btn btn-secondary"
        disabled={page === 1}
        onClick={onPrevious}
      >
        ⬅ Previous
      </button>

      <button
        className="btn btn-light"
        disabled
      >
        Page {page}
      </button>

      <button
        className="btn btn-secondary"
        disabled={page === totalPages}
        onClick={onNext}
      >
        Next ➡
      </button>

    </div>
  );
}

export default Pagination;