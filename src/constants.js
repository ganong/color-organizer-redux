
const constants = {
  ADD_COLOR: "ADD_COLOR",
  RATE_COLOR: "RATE_COLOR",
  REMOVE_COLOR: "REMOVE_COLOR",
  SORT_COLORS: "SORT_COLORS",
}

export const sortMap = {
  'date': 'SORTED_BY_DATE',
  'title': 'SORTED_BY_TITLE',
  'rating': 'SORTED_BY_RATING',
}
export const sortMapReverse = Object.keys(sortMap).reduce(
  (acc, m) => ({
    ...acc,
    [sortMap[m]]: m
  }), 
  {}
)


export default constants
