const toggle = document.querySelector('#toggle');
const nav = document.querySelector('.nav');
const portfolioContainer = document.querySelector('#portfolio');
const modal = document.querySelector('.modal-wrapper');
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
        id: 1,
        title: 'Tonic',
        sub_title: 'CANOPY',
        project_type: 'Back End Dev',
        project_date: '2015',
        img: 'pic1.png',
        description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        tags: ['html', 'css', 'javascript'],
    },

    {
        id: 2,
        title: 'Facebook 360',
        sub_title: 'FACEBOOK',
        project_type: 'Full Stack Dev',
        project_date: '2015',
        img: 'pic2.png',
        description:
            "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
        tags: ['html', 'css', 'javascript, Ruby on rails,'],
    },

    {
        id: 3,
        title: 'Multi-Post Stories',
        sub_title: 'FACEBOOK',
        project_type: "'Full Stack Dev",
        project_date: '2015',
        img: 'pic3.png',
        description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        tags: ['html', 'css', 'javascript'],
    },

    {
        id: 4,
        title: 'Uber Navigation',
        sub_title: 'CANOPY',
        project_type: 'Back End Dev',
        project_date: '2015',
        img: 'pic4.png',
        description:
            'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car',
        tags: ['html', 'css', 'javascript'],
    },
];

function listAllProjects() {
    let projectHtml = '';

    data.forEach((project) => {
        let tagsHtml = '';

        if (project.tags.length) {
            project.tags.forEach((tag) => {
                tagsHtml += `<li><a href="#">${tag}</a></li>`;
            });
        }

        projectHtml += `<div class="card-container one">
        <div class="card-image">
          <img class="mob" src="./image/${project.img}" alt="${project.img}" />
        </div>
        <div class="card-content">
          <h3>${project.title}</h3>
          <ul class="institution">
            <li><a href="#" class="canopy">${project.sub_title}</a></li>
            <div class="dot"></div>
            <li><a href="#" class="year">${project.project_type}</a></li>
            <div class="dot"></div>
            <li><a href="#" class="year">${project.project_date}</a></li>
          </ul>
          <p>
           ${project.description}
          </p>
          <ul class="tech">
            ${tagsHtml}
          </ul>
           <a href = "#linked" ><button id="${project.id}">See Project></button></a>
         
        </div>
      </div>
    `;
    });

    portfolioContainer.innerHTML = projectHtml;
}

listAllProjects();

portfolioContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        const id = button.getAttribute('id');
        findProject(id);
    }
});

function findProject(id) {
    const project = data.find((project) => project.id === Number(id));

    let technologiesHtml = '';
    if (project.tags.length) {
        project.tags.forEach((technology) => {
            technologiesHtml += `<li><a href="#">${technology}</a></li>`;
        });
    }

    modal.innerHTML = `
  <div class="modal-card">
  <div class="modal-header">
      <h1 class="modal-title">${project.title}</h1>

      <button title="close button" type="button" class="modal-close-btn">
          <img src="image/close-btn.png" alt="close" width="100%" />
      </button>
  </div>
  <div class="project-additional-info modal-additional-info">
      <h5>${project.sub_title}</h5>
      <div class="dot"></div>
      <p>${project.project_type}</p>
      <div class="dot"></div>
      <p><time datetime="${project.project_date}">${project.project_date}</time></p>
  </div>

  <div class="project-image-container" style="background-image: url('./image/${project.img}');"></div>

  <div class="modal-content">
      <p class="project-description">${project.description}</p>

      <div class="project-information-2">
          <ul class="tech">
              ${technologiesHtml}
          </ul>

          <div class="divider"></div>

          <div class="modal-actions">

              <a type="button" href="${project.liveVersion}" class="button">
                <button id="${project.id}">
                See live
                  <img
                      src="./image/see_live.svg"
                      width="21px"
                      alt="see live"
                  />
                </button>
              </a>

              <a type="button" href="${project.sourceLink}" class="button">

              <button id="${project.id}">
              See Source
              <img
                  src="./image/github_in_button.svg"
                  width="21px"
                  alt="github"
              />
                </button>
              </a>
          </div>
      </div>
  </div>
</div>
  `;

    modal.classList.remove('close');
    document.body.classList.add('hidescrollbar');

    modal.addEventListener('click', (e) => {
        if (e.target.parentElement.classList.contains('modal-close-btn')) {
            modal.classList.add('close');
            modal.innerHTML = '';
            document.body.classList.remove('hidescrollbar');
        }
    });
}

modal.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('popup-cancel')) {
        modal.classList.add('close');
    }
});

// Object.keys(data).forEach((key) => {
//   document.getElementById(
//     "portfolio"
//   ).innerHTML += `<div class="card-container one">
//         <div class="card-image">
//           <img class="mob" src="./image/${data[key].popup_img}" alt="mobile img" />
//            <img  class="dec" src="./image/dec1.png" alt="desktop img">
//         </div>
//         <div class="card-content">
//           <h3>${data[key].popup_heading}</h3>
//           <ul class="institution">
//             <li><a href="#" class="canopy">${data[key].popup_canopy[0]}</a></li>
//             <div class="dot"></div>
//             <li><a href="#" class="year">${data[key].popup_canopy[1]}</a></li>
//             <div class="dot"></div>
//             <li><a href="#" class="year">${data[key].popup_canopy[2]}</a></li>
//           </ul>
//           <p>
//             A daily selection of privately personalized reads; no accounts or
//             sign-ups required.
//           </p>
//           <ul class="tech">
//             <li><a href="#">${data[key].popup_tags[0]}</a></li>
//             <li><a href="#">${data[key].popup_tags[1]}</a></li>
//             <li><a href="#">${data[key].popup_tags[2]}</a></li>
//           </ul>
//           <button onclick = "openModal('${counterImage}')"><a href="#">See Project<a></button>
//         </div>
//       </div>`;
//   counterImage += 1;
// });

// const openModal = (portfolio) => {
//   document.getElementById("toolbar").style.filter = "blur(5px)";
//   document.getElementById("first_page").style.filter = "blur(5px)";
//   document.getElementById('modal').style.display = 'block';
//   document.getElementById(
//     "modal"
//   ).innerHTML = ` <div class="popup-container">
//         <div class="popup-header">
//           <h2 class="popup-heading" id="popup_heading">Tonic</h2>
//           <div class="popup-cancel">
//             <img src="./image/close-btn.png" alt="cancel button" class="closebtn" id="closebtn">
//           </div>
//         </div>
//         <ul class="popup-canopy" id="popup_canopy">
//           <li>CANOPY</li>
//           <li><img src="./image/dot.png" alt="dot" class="canopy-dot"></li>
//           <li>Back End Dev</li>
//           <li><img src="./image/dot.png" alt="dot" class="canopy-dot"></li>
//           <li>2015</li>
//         </ul>
//       </div>
//       <div class="popup-card">
//         <img src="./image/${data[portfolio].popup_img}" alt="card image" class="popup-img" id="popup_img">
//       </div>
//       <div class="popup-description">
//         <p class="popup-text" id="popup_text">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//           when an unknown printer took a galley of type and scrambled it to make
//           a type specimen book. It has survived not only five centuries, but also
//           the leap into electronic typesetting, remaining essent
//         </p>
//         <ul class="popup-tags" id="popup_tags">
//           <li class="tags-item">html</li>
//           <li class="tags-item">css</li>
//           <li class="tags-item">javascript</li>
//         </ul>
//         <div class="popup-divider">
//           <div class="popbtn" id="popbtn">
//             <span class="btn-container">
//               <button class="see-live" id="see_live"><p>See live</p><a class="pop-icon" id="pop-icon" href="#"><img src="./image/see-live.png" alt="live demo"></a></button>
//             </span>
//             <span class="btn-container">
//               <button class="see-source" id="see_source"><p class="see">See source</p><a class="pop-icon" id="pop-icon" href="#"><i class='fa-brands fa-github'></i></a></button>
//             </span>
//           </div>
//         </div>
//       </div>`;
// };

// const closeModal = () => {
//   document.getElementById("modal").style.display = "none";
//   document.getElementById("toolbar").style.filter = "blur(0px)";
//   document.getElementById("first_page").style.filter = "blur(0px)";
// };
// if (document.getElementById("modal").elements[1].value === true) {
//   closeModal();
//   openModal();
// }
