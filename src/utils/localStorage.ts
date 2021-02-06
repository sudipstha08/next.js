export const getLocalData = (key: string) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return false;
};
