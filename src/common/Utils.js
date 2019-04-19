export const makeToMarkedPrice = (price) => {
  const pointRegex = /\B(?=(\d{3})+(?!\d))/g;
  return price.toString().replace(pointRegex, ',');
};