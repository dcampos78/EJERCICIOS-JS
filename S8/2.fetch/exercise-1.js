fetch('https://api.agify.io?name=michael')
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });