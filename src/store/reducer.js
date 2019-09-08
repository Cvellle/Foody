const initialState = {
  loading: false,
  items: [],
  filtered: [],
  filtered2: [],
  filteredByCatInSearch: [],
  selected: null,
  seachTrue: true
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.loading }
    case 'SET_ITEMS':
      return { ...state, items: action.items}
    case 'SET_FILTERED':
      return { ...state, filtered: action.filtered}
    case 'FILTER_BY_CATEGORY':
      const filtered = state.items.filter(ob => ob.category.toLowerCase().includes(action.category))
      return { ...state, filtered}
    case 'FILTER_ITEMS':
      const filtered2 = state.filtered.filter(ob => ob.name.toLowerCase().includes(action.critreria))
      return { ...state,  filtered2}
    case 'FILTER_BY_CAT_IN_SEARCH':
      const filteredByCatInSearch = state.filtered2.filter(ob => ob.category.toLowerCase().includes(action.ctg))
      return { ...state,  filteredByCatInSearch}
    case 'SELECT_ITEM':
      return { ...state,  selected: action.selected}
    case 'SET_SEARCH_TRUE':
      return { ...state,  seachTrue: action.setSearch}  
    default:
      return state
  } 
}
