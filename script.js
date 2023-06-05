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
    title: 'React_Rest_Country',
    sub_title: 'Metrics webapp',
    project_type: 'Front End Dev',
    project_date: '2023',
    img: 'rest country.png',
    description:
      'Rest Country is a React/Redux Metrics webapp that provides users with quick and easy access to information about countries worldwide. It offers details such as capital, population, currency, languages, and time zone. Users can explore photos, learn about neighboring countries, discover national anthems, and bookmark their favorite countries.',
    tags: ['react', 'redux'],
    liveVersion: 'https://the-countries.onrender.com/',
    sourceLink: 'https://github.com/QueenterJuma/React_Rest_Country_Capstone',
  },
  {
    id: 1,
    title: 'To-Do List',
    sub_title: 'Daily Activity',
    project_type: 'Front End Dev',
    project_date: '2023',
    img: 'todolist.png',
    description:
      'To-do-list is a project done for the activity To Do list: list structure of the Microverse Program. The goal is to learn use WEBPACK, JavaScript ES6, and UNIT TESTING using JEST.',
    tags: ['html', 'css', 'javascript'],
    liveVersion: 'https://queenterjuma.github.io/To-do-list.github.io/dist/',
    sourceLink: 'https://github.com/QueenterJuma/To-do-list.github.io',
  },
  {
    id: 2,
    title: 'CORPORATE VALUE CHAIN INNOVATION AND R&D LEADERS LIVEWORX 2023',
    sub_title: 'HTML/CSS CAPSTONE',
    project_type: 'Front End Dev',
    project_date: '2023',
    img: '@tric.png',
    description:
      'The goal of this project is to create a UI Capstone project and use Flexbox to place elements on the page. Also, adding images and backgrounds to enhance the look of the website.',
    tags: ['html', 'css', 'javascript'],
    liveVersion: 'https://queenterjuma.github.io/Capstone_one.github.io/',
    sourceLink: 'https://github.com/QueenterJuma/Capstone_one.github.io',
  },
  {
    id: 3,
    title: 'AWESOME BOOKS',
    sub_title: 'BOOK STORE',
    project_type: "'Front End Dev",
    project_date: '2023',
    img: 'owesome.png',
    description:
      'Awesome-book is a basic website that allows users to add/remove books from a list.',
    tags: ['html', 'css', 'javascript'],
    liveVersion: 'https://queenterjuma.github.io/-Awsome-book/',
    sourceLink: 'https://github.com/QueenterJuma/-Awsome-book',
  },
  {
    id: 4,
    title: 'MY PORTFOLIO',
    sub_title: 'PORTFOLIO',
    project_type: 'Front End Dev',
    project_date: '2023',
    img: 'portfolio.png',
    description:
      'The goal of this project is to create a UI personal portfolio site using Figma design and using Flexbox, Grid and float to position element in the page. Also, adding images and background to enhance the look of the website.',
    tags: ['html', 'css', 'javascript'],
    liveVersion: 'https://queenterjuma.github.io/Capstone_one.github.io/',
    sourceLink: 'https://github.com/QueenterJuma/Capstone_one.github.io',
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
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tex type and scrambled it 1960s with t 1960s.
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

portfolioContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    const id = button.getAttribute('id');
    findProject(id);
  }
});

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
