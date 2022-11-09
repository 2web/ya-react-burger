export const fetchQ = (url, callBack) => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => callBack(data.data))
    .catch((err) => console.log(err));
};