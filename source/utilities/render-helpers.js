export const createListView = viewFn => (start, list, end) => {
  return list
    .map(
      item => `
      ${start}
      ${viewFn(item)}
      ${end}
    `,
    )
    .join(' ')
}

export const updateElement = (element, html) => {
  element.innerHTML = html
}
