
  //creating an XML Http Request Object
  const req = new XMLHttpRequest();
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send(); // sending the request to the server
  //what to do when the request is loaded
  req.onload = function() {
    const obj = JSON.parse(this.response);
    for(let ind=0; ind<obj.length; ind++){
      console.log(obj[ind].flags.png);
    }
    //console.log(JSON.parse(this.response));
  };