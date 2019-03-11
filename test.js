function delay(ms) {
  return new Promise(function(resolve, reject) {
    let t = true;

    setTimeout(resolve, ms);
  });
}

delay(1000).then(
  function() {
    alert("Hello!");
  },
  function() {
    alert("aaaaaa");
  }
);
