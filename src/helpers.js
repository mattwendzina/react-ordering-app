export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "GBP"
});

// Check whether object is empty
export const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};
