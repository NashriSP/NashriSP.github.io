// Terminal js start
const windows = document.getElementsByClassName("windows")
if ($(window).width() < 960) {
  mh = 105;
  pr = "Nashri@githubIo:~$";
  gr = null
}
else {
  mh = 455;
  pr = "NashriSP@github-io:~$";
  gr = '╔═╗─╔╗─────╔╗─────╔═══╗─────────╔═══╦╗╔╗' +
    '\n║║╚╗║║─────║║─────║╔═╗║─────────║╔═╗║║║║' +
    '\n║╔╗╚╝╠══╦══╣╚═╦═╦╗║║─║╠═══╦╦═══╗║║─║║║║╚═╦══╦═══╦╗╔╦╗─╔╗' +
    '\n║║╚╗║║╔╗║══╣╔╗║╔╬╣║╚═╝╠══║╠╬══║║║╚═╝║║║╔╗║╔╗╠══║║╚╝║║─║║' +
    '\n║║─║║║╔╗╠══║║║║║║║║╔═╗║║══╣║║══╣║╔═╗║╚╣║║║╔╗║║══╣║║║╚═╝║' +
    '\n╚╝─╚═╩╝╚╩══╩╝╚╩╝╚╝╚╝─╚╩═══╩╩═══╝╚╝─╚╩═╩╝╚╩╝╚╩═══╩╩╩╩═╗╔╝' +
    '\n───────────────────────────────────────────────────╔═╝║' +
    '\n───────────────────────────────────────────────────╚══╝'
}
$(windows).terminal({
  iam: function (name) {
    this.echo('Hello, ' + name +
      '. My Name is Nashri Aziz Alhazmy');
  },


}, {
  greetings: gr,
  prompt: pr,
  name: 'test',
  height: mh
});

// Termina js end


// dragable windows start
dragElement(document.getElementById("drag"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    if (elmnt.offsetTop - pos2 < 0) {
      elmnt.style.top = 0 + "px";
    } if (e.clientY > window.innerHeight - elmnt.offsetHeight + e.offsetY) {
      elmnt.style.top = window.innerHeight - elmnt.offsetHeight + "px";
    } else {
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    };
    // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    if (elmnt.offsetLeft - pos1 < 0) {
      elmnt.style.left = 0 + "px";
    } if (window.innerWidth - e.clientX + e.offsetX < elmnt.offsetWidth) {
      elmnt.style.left = window.innerWidth - elmnt.offsetWidth + "px";
    } else {
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    };
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// dragable windows end

// canva rain from Ebram Marzouk's codepen https://codepen.io/P3R0/pen/MwgoKv start
var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//symbol characters - taken from the unicode charset
var symbol = "1234567890!@#$%^&*<>?/|";
//converting the string into an array of single characters
symbol = symbol.split("");

var font_size = 20;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
  drops[x] = 1;

//drawing the characters
function draw() {
  //Black BG for the canvas
  //translucent BG to show trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = "#0F0"; //green text
  ctx.font = font_size + "px arial";
  //looping over drops
  for (var i = 0; i < drops.length; i++) {
    //a random symbol character to print
    var text = symbol[Math.floor(Math.random() * symbol.length)];
    //x = i*font_size, y = value of drops[i]*font_size
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    //sending the drop back to the top randomly after it has crossed the screen
    //adding a randomness to the reset to make the drops scattered on the Y axis
    if (drops[i] * font_size > c.height && Math.random() > 0.975)
      drops[i] = 0;

    //incrementing Y coordinate
    drops[i]++;
  }
}

setInterval(draw, 77.7);
// canva rain from Ebram Marzouk's codepen https://codepen.io/P3R0/pen/MwgoKv end 

window.addEventListener("resize", function () {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  new_size = c.width / font_size;
  drops = [];
  for (var i = 0; i < new_size; i++)
    drops[i] = 1;

});