let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let API = "https://rickandmortyapi.com/api/character/";

const fetchData = (url, callback) => {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      // request completed
      if (xhttp.status === 200) {
        //STATUS OK
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error " + url);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
};

const handleError = (error) => {
  if (error) return console.log(error);
};

fetchData(API, (error1, data1) => {
  handleError(error1);
  fetchData(API + data1.results[0].id, (error2, data2) => {
    handleError(error2);
    fetchData(data2.origin.url, (error3, data3) => {
      handleError(error3);
      console.log(`
        Número de Personaje: ${data1.info.count}
        Nombre: ${data2.name}
        Dimensión: ${data3.dimension}  
      `);
    });
  });
});
