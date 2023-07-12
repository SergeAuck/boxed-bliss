export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  return ["all", ...new Set(unique)];
};
