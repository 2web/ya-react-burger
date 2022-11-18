import { useEffect, useState } from 'react';
import { fetchGet } from './fetch';
import { URL, ING } from "./const";

function useGetBase() {
  const [dBase, setdBase] = useState([]);

  useEffect(() => {
    fetchGet(URL + ING, setdBase)
    .then(res => {
      res !== undefined && setdBase(res.data)
    })
    .catch(error => {
      console.log(error)
    });
  }, [])

  return {
    dBase,
    setdBase
  }
}

export default useGetBase;
