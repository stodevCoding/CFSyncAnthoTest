function onSignIn(googleUser) {
    isSigned = true;
    var profile = googleUser.getBasicProfile();
    userId = profile.getId(); // Do not send to your backend! Use an ID token instead.
    userName = profile.getName();
    userPP = profile.getImageUrl();
    userEmail = profile.getEmail();
    sendInfoUser(userId, userName, userPP, userEmail);
}

function redirect(){
    window.location.pathname = '/index'
}

function sendInfoUser(id, name, pp, email) {
    alert("waiiiiiit");
    db.collection('Users').doc(id).set({
        userName: name,
        userPP: pp,
        userEmail: email
    }).then(function() {
        redirect();
    }).catch(function(error) {
        console.log('error', error);
    });
}

function login() {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('mdp').value;
    database.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("1:", errorCode, "2:", errorMessage);
    });
}

function signin() {
    event.preventDefault();
    var email = document.getElementById('newEmail').value;
    var password = document.getElementById('newPassword').value;
    database.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("1:", errorCode, "2:", errorMessage);
    });
}

function sendInfoUser() {
    var prenom = document.getElementById('newPrenom').value;
    var nom = document.getElementById('newNom').value;

    database.collection("Users").doc(myID).set({
        nom: 'nom',
        prenom: 'prenom'
    }).then(function() {
        console.log("Information envoyé");
    }).catch(function(error) {
        console.log("Error", error);
    });
}