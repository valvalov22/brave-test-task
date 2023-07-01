export const getDate = () => {
  let today = new Date(),
    date =
      (today.getHours() > 9 ? today.getHours() : "0" + today.getHours()) +
      ":" +
      (today.getMinutes() > 9 ? today.getMinutes() : "0" + today.getMinutes()) +
      ":" +
      (today.getSeconds() > 9 ? today.getSeconds() : "0" + today.getSeconds()) +
      " " +
      (today.getDate() > 9 ? today.getDate() : "0" + today.getDate()) +
      "." +
      (today.getMonth() + 1 > 9
        ? today.getMonth()
        : "0" + (today.getMonth() + 1)) +
      "." +
      today.getFullYear();

  return date;
};
