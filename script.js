// Terminal js start
const windows = document.getElementsByClassName("windows")

$(windows).terminal({
  iam: function (name) {
    this.echo('Hello, ' + name +
      '. My Name is Nashri Aziz Alhazmy');
  },

}, {
  greetings:
    '╔═╗─╔╗─────╔╗─────╔═══╗─────────╔═══╦╗╔╗' +
    '\n║║╚╗║║─────║║─────║╔═╗║─────────║╔═╗║║║║' +
    '\n║╔╗╚╝╠══╦══╣╚═╦═╦╗║║─║╠═══╦╦═══╗║║─║║║║╚═╦══╦═══╦╗╔╦╗─╔╗' +
    '\n║║╚╗║║╔╗║══╣╔╗║╔╬╣║╚═╝╠══║╠╬══║║║╚═╝║║║╔╗║╔╗╠══║║╚╝║║─║║' +
    '\n║║─║║║╔╗╠══║║║║║║║║╔═╗║║══╣║║══╣║╔═╗║╚╣║║║╔╗║║══╣║║║╚═╝║' +
    '\n╚╝─╚═╩╝╚╩══╩╝╚╩╝╚╝╚╝─╚╩═══╩╩═══╝╚╝─╚╩═╩╝╚╩╝╚╩═══╩╩╩╩═╗╔╝' +
    '\n───────────────────────────────────────────────────╔═╝║' +
    '\n───────────────────────────────────────────────────╚══╝',
  prompt: "NashriSP@nashrigitio:~$",
  name: 'test',
  height: 500
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
    } if (e.clientY > window.innerHeight - elmnt.offsetHeight+ e.offsetY) {
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

