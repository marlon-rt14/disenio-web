import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);
        if (!res.ok) {
          // eslint-disable-next-line
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
          };
        }

        let data = await res.json();
        setIsPending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        // console.log(err);
        setIsPending(true);
        setError(err);
      }
    };

    getData(url);
  }, [url]);

  // podemos retornar cualquier tipo de datos
  return { data, isPending, error };
};
