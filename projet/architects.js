// Initialize Firebase
var config = {
    apiKey: "AIzaSyBSpkD3obqfsvuQ8B0QcfdP-xx0E3INr3Y",
    authDomain: "rev-estate.firebaseapp.com",
    databaseURL: "https://rev-estate.firebaseio.com",
    projectId: "rev-estate",
    storageBucket: "rev-estate.appspot.com",
    messagingSenderId: "234438509168"
  };
  firebase.initializeApp(config);

  
var architects = firebase.database().ref('architect');
jibli();

function jibli(){
    architects.once('value').then(function(snapshot){
		snapshot.forEach(afra7bih);
	})

}

function afra7bih(singlesnapshot){
	var architect = singlesnapshot.val();
	$("#list-architects").append(`
    <div class="card">
      <img src="${architect.image}" alt="Avatar" style="width:100%">
      <div class="container">
        <h4><b>architect.nom</b></h4> 
        <p>architect.carrière</p> 
        <p>architect.projet</p>

      </div>
    </div>
    `)

}