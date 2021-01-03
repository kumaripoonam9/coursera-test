(function (window) {

  var names = [
    "Prat",
    "Jay Shetty",
    "Sam",
    "John",
    "Samantha",
    "jonny",
    "Haily",
    "Elizabeth",
    "Marcus"
  ];

  for (var i = 0; i < names.length; i++) {

    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } 
    else {
      helloSpeaker.speak(names[i]);
    }
  }

})(window);
