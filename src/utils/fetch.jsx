const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const fetchQ = (url, callBack) => {
  return fetch(url).then(checkReponse).then((data) => callBack(data.data));
};