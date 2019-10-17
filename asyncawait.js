function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "Google") {
      resolve(`Google say Hi`);
    } else {
      reject("We can only talk to Google");
    }
  });
}

function preocessRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information + ${response}`);
  });
}

makeRequest("Facebook")
  .then(response => {
    console.log("Respon");
    return preocessRequest(response);
  })
  .then(preocessRequest => {
    console.log(preocessRequest);
  })
  .catch(err => {
    console.log(err);
  });
