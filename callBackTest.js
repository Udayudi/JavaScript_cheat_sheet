const userLeft = false;
const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       nama: "User Left",
//       message: ":("
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "User watching Cat Meme",
//       message: "A < Cat"
//     });
//   } else {
//     callback("Thubs Up");
//   }
// }

// watchTutorialCallback(
//   message => {
//     console.log("Success: " + message);
//   },
//   error => {
//     console.log(error.nama + " " + error.message);
//   }
// );

function watchTutorialPromise() {
  return new Promise((req, res) => {
    if (userLeft) {
      res({
        nama: "User Left",
        message: ":("
      });
    } else if (userWatchingCatMeme) {
      res({
        name: "User watching Cat Meme",
        message: "A < Cat"
      });
    } else {
      req("Thubs Up");
    }
  });
}

watchTutorialPromise()
  .then(message => {
    console.log("Success: " + message);
  })
  .catch(error => {
    console.log(error.nama + " " + error.message);
  });
