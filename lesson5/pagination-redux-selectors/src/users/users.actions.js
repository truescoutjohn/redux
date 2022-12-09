export const NEXT_PAGE = 'PAGINATOR/NEXT';
export const PREV_PAGE = 'PAGINATOR/PREV';

export const nextPage = currentPage => ({ type: NEXT_PAGE, payload: { currentPage } });
export const prevPage = currentPage => ({ type: PREV_PAGE, payload: { currentPage } });
