export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeaders = {
      // oye puedo acpetar application/json pero ya de ti dependera la data que me quieras devolver. Al hacerlo de esta manera no afectamos a als demas APIS con la forma en en que envian y devuelven la data
      // accpet: "application/json", // falla a al hacer fetch con esta api
    };

    // manejador de errores cuando el servidor no nos responde podemos cancelar lapeticion
    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    // console.log(options);

    // abortar si no tenemos una respuesta del servidor despues de 3 segundos
    // cancelar manualmente alguna peticion que se haya quedado ciclada por algun error de la API que estamos consultando
    setTimeout(() => {
      controller.abort();
    }, 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrio un error",
            })
      )
      .catch((err) => err); // se lo pasa al metodo ue hay invocado el error
  };

  //valor por defecto de option
  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };
  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };
  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
