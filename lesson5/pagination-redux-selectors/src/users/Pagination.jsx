import React from 'react';
const renderNextButton = (isNextPageAvailable, goNext) => {
  return (
    <button className="btn" onClick={goNext} disabled={isNextPageAvailable}>
      {!isNextPageAvailable ? '→' : ''}
    </button>
  );
};

const renderPrevButton = (isPrevPageAvailable, goPrev) => {
  return (
    <button className="btn" onClick={goPrev} disabled={isPrevPageAvailable}>
      {!isPrevPageAvailable ? '←' : ''}
    </button>
  );
};

const Pagination = props => {
  const isPrevPageAvailable = props.currentPage > 1 ? false : true;
  const isNextPageAvailable =
    props.currentPage < Math.ceil(props.totalItems / props.itemsPerPage) ? false : true;
  const prevButton = renderPrevButton(isPrevPageAvailable, props.goPrev);
  const nextButton = renderNextButton(isNextPageAvailable, props.goNext);

  return (
    <div className="pagination">
      {prevButton}
      <span className="pagination__page">{props.currentPage}</span>
      {nextButton}
    </div>
  );
};

export default Pagination;
