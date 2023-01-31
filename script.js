const toggle = document.querySelector('#toggle');
const nav = document.querySelector('.nav');
let menuOpen = false;

toggle.addEventListener('click', () => {
  if (!menuOpen) {
    toggle.classList.add('open');
    menuOpen = true;
  } else {
    toggle.classList.remove('open');
    menuOpen = false;
  }
  nav.classList.toggle('open');
});

let counterImage = 0;
/* popup-window */

const data = [
  {
    id: "modal",
    popup_heading: "Tonic",
    popup_canopy: ["CANOPY", "Back End Dev", 2015],
    popup_img: "pic1.png",
    popup_text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    popup_tags: ["html", "css", "javascript"],
    see_live: "#",
    see_source: "#",
  },

  {
    id: "modal",
    popup_heading: "Tonic",
    popup_canopy: ["CANOPY", "Back End Dev", 2015],
    popup_img: "pic2.png",
    popup_text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    popup_tags: ["html", "css", "javascript"],
    see_live: "#",
    see_source: "#",
  },

  {
    id: "modal",
    popup_heading: "Tonic",
    popup_canopy: ["CANOPY", "Back End Dev", 2015],
    popup_img: "pic3.png",
    popup_text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    popup_tags: ["html", "css", "javascript"],
    see_live: "#",
    see_source: "#",
  },

  {
    id: "modal",
    popup_heading: "Tonic",
    popup_canopy: ["CANOPY", "Back End Dev", 2015],
    popup_img: "pic4.png",
    popup_text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    popup_tags: ["html", "css", "javascript"],
    see_live: "#",
    see_source: "#",
  },
];

Object.keys(data).forEach((key) => {
  document.getElementById(
    "portfolio"
  ).innerHTML += `<div class="card-container one">
        <div class="card-image">
          <img class="mob" src="./image/pic1.png" alt="mobile img" />
          <img  class="dec" src="./image/dec1.png" alt="desktop img">
        </div>
        <div class="card-content">
          <h3>${data[key].popup_heading}</h3>
          <ul class="institution">
            <li><a href="#" class="canopy">${data[key].popup_canopy[0]}</a></li>
            <div class="dot"></div>
            <li><a href="#" class="year">${data[key].popup_canopy[1]}</a></li>
            <div class="dot"></div>
            <li><a href="#" class="year">${data[key].popup_canopy[2]}</a></li>
          </ul>
          <p>
            A daily selection of privately personalized reads; no accounts or
            sign-ups required.
          </p>
          <ul class="tech">
            <li><a href="#">${data[key].popup_tags[0]}</a></li>
            <li><a href="#">${data[key].popup_tags[1]}</a></li>
            <li><a href="#">${data[key].popup_tags[2]}</a></li>
          </ul>
          <button onclick = "openModal('${counterImage}')"><a href="#">See Project<a></button>
        </div>
      </div>`;
  counterImage += 1;
});


const openModal = (portfolio) => {
  document.getElementById("toolbar").style.filter = "blur(5px)";
  document.getElementById("first_page").style.filter = "blur(5px)";
  document.getElementById('modal').style.display = 'block';
  document.getElementById(
    "modal"
  ).innerHTML = ` <div class="popup-container">
        <div class="popup-header">
          <h2 class="popup-heading" id="popup_heading">Tonic</h2>
          <div class="popup-cancel">
            <img src="./image/close-btn.png" alt="cancel button" class="closebtn" id="closebtn">
          </div>
        </div>
        <ul class="popup-canopy" id="popup_canopy">
          <li>CANOPY</li>
          <li><img src="./image/dot.png" alt="dot" class="canopy-dot"></li>
          <li>Back End Dev</li>
          <li><img src="./image/dot.png" alt="dot" class="canopy-dot"></li>
          <li>2015</li>
        </ul>
      </div>
      <div class="popup-card">
        <img src="./image/${data[portfolio].popup_img}" alt="card image" class="popup-img" id="popup_img">
      </div>
      <div class="popup-description">
        <p class="popup-text" id="popup_text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make 
          a type specimen book. It has survived not only five centuries, but also 
          the leap into electronic typesetting, remaining essent
        </p>
        <ul class="popup-tags" id="popup_tags">
          <li class="tags-item">html</li>
          <li class="tags-item">css</li>
          <li class="tags-item">javascript</li>
        </ul>
        <div class="popup-divider">
          <div class="popbtn" id="popbtn">
            <span class="btn-container">
              <button class="see-live" id="see_live"><p>See live</p><a class="pop-icon" id="pop-icon" href="#"><img src="./image/see-live.png" alt="live demo"></a></button>
            </span>
            <span class="btn-container">
              <button class="see-source" id="see_source"><p class="see">See source</p><a class="pop-icon" id="pop-icon" href="#"><i class='fa-brands fa-github'></i></a></button>
            </span>
          </div>
        </div>
      </div>`;
};

const closeModal = () => {
  document.getElementById("modal").style.display = "none";
  document.getElementById("toolbar").style.filter = "blur(0px)";
  document.getElementById("first_page").style.filter = "blur(0px)";
};
if (document.getElementById("modal").elements[1].value === true) {
  closeModal();
  openModal();
}