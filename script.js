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
/* popup-window */
const data = [
  {
    id: 1,
    title: 'Tonic',
    sub_title: 'CANOPY',
    project_type: 'Back End Dev',
    project_date: '2015',
    img: 'pic1.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
  },
  {
    id: 2,
    title: 'Facebook 360',
    sub_title: 'FACEBOOK',
    project_type: 'Full Stack Dev',
    project_date: '2015',
    img: 'pic2.png',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    tags: ['html', 'css', 'javascript, Ruby on rails,'],
  },
  {
    id: 3,
    title: 'Multi-Post Stories',
    sub_title: 'FACEBOOK',
    project_type: "'Full Stack Dev",
    project_date: '2015',
    img: 'pic3.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
  },
  {
    id: 4,
    title: 'Uber Navigation',
    sub_title: 'CANOPY',
    project_type: 'Back End Dev',
    project_date: '2015',
    img: 'pic4.png',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car',
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
           <a href = "#linked" ><button id="${project.id}">See Project</button></a>
         
        </div>
      </div>
      `;
  });
  portfolioContainer.innerHTML = projectHtml;
}

listAllProjects();

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
      <p class="project-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
      </p>

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
  
  portfolioContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const button = e.target;
      const id = button.getAttribute('id');
      findProject(id);
    }
  });
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
/* form-validation */
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  const validError = document.getElementById('validError');
  const email = form.elements[1].value;
  if (email.toLowerCase() !== email) {
    validError.style.display = 'block';
    e.preventDefault();
  }
});
