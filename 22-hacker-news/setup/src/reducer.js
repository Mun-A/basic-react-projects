import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      const { hits, nbPages } = payload;
      return { ...state, isLoading: false, hits: hits, nbPages: nbPages };
    case REMOVE_STORY:
      const filteredHits = state.hits.filter(
        (story) => story.objectID !== payload
      );
      return { ...state, hits: filteredHits };
    case HANDLE_SEARCH:
      return { ...state, query: payload, page: 0 };
    case HANDLE_PAGE:
      if (payload === 'inc') {
        let nextPage = state.page + 1;
        if (nextPage > state.nbPages - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage };
      }
      if (payload === 'dec') {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.nbPages - 1;
        }
        return { ...state, page: prevPage };
      }
    default:
      throw new Error(`no matching "${type}" action type`);
  }
};

export default reducer;
