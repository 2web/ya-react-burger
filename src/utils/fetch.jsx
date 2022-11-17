const checkReponse = (promise) => {
    return promise.then((res) => {
      return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
    });
};

export const fetchGet = (url, callBack) => {
  const promise = fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json: charset=utf-8",
    },
  });
  return checkReponse(promise).then((data) => callBack(data.data))
};

export const fetchPost = (url, data) => {
  const promise = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json: charset=utf-8",
    },
    body: JSON.stringify(data),
  });
  return checkReponse(promise);
};
export default fetchPost