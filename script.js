function showZipcode() {
  
  let userInput = document.getElementById('word-search-input').value;
  
  axios.get(`https://api.zippopotam.us/us/${userInput}`)
    .then(response => {
      console.log(response.data.places[0]['state']) //State
      console.log(response.data.places[0]['place name']); // City Name
      console.log(response.data.places[0]['latitude']); // Latitude
      console.log(response.data.places[0]['longitude']); // Longitude

      let state = response.data.places[0]['state']
      let city = response.data.places[0]['place name']
      let lat = response.data.places[0]['latitude']
      let long = response.data.places[0]['longitude']


      // hide the text on the page that says "try searching for a word"
      document.getElementById('no-word-found').style.display = "none";
      // set the HTML in the word span to be the word variable
      document.getElementById('state').innerText = state;
      // set the HTML in the pronunciation span to be the pronunciation variable
      document.getElementById('city').innerText = city;

      document.getElementById('latitude').innerText = lat;

      document.getElementById('longitutde').innerText = long;



    });
}







  
      
  
