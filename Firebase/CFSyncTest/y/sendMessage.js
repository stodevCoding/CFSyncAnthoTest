function sendMessage() {
  event.preventDefault();
  var time = new Date();
  var message = document.getElementById("fieldmessage").value;
  //Recup ID de l'user identifié
  var user = database.auth().currentUser;
  console.log(user.uid);
  //Recup son prenom puo execute l'envoie du message
  db.collection('Users').doc(user.uid).get().then(function(doc) {
      if(doc.exists) {
          userName = doc.data().prenom;
          //Requete envoie du message
          db.collection('TP_general').add({
            msg: message,
            time: time,
            user: userName
          }).then(function(docRef) {
              console.log('ID message:', docRef.id);
          }).catch(function(error) {
              console.log('Error:', error);
          });
          
      }
  }).catch(function(error) {
      console.log('error', error);
  });
  
}

function onWriting() {
  var writeRef = db.collection("onWrite").doc("main");

  return writeRef.update({
    write: true
  }).then(function() {
    //console.log("Document Updated");
  }).catch(function(error) {
    console.log("Error", error);
  });
}

function stopWriting() {
  var writeRef = db.collection("onWrite").doc("main");

  return writeRef.update({
    write: false
  }).then(function() {
    //console.log("Document Updated");
  }).catch(function(error) {
    console.log("Error", error);
  });
}

function test() {
    console.log(userName);
    console.log(isSigned);
}
