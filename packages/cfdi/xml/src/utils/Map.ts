export const sortObject = (
  obj: Record<string, any>,
  order: string[]
): Record<string, any> => {
  const sortedObj: Record<string, any> = {};

  order.forEach((key) => {
    if (key in obj) sortedObj[key] = obj[key];
  });

  Object.keys(obj).forEach((key) => {
    if (!(key in sortedObj)) sortedObj[key] = obj[key];
  });

  return sortedObj;
};
