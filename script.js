const projectDetails = [
  {
    title: 'Multi-Post Stories',
    imgSource: ['./images/img_placeholder-desktop.png', './images/Img_Placeholder-card_1.png'],
    description: `A daily selection of privately personalized
    reads; no accounts or sign-ups
    has been the industry's standard dummy
    text ever since the 1500s, when an
    unknown printer took a standard dummy text.`,
    technologies: ['html', 'css', 'bootstrap', 'Ruby'],
  },
  {
    title: 'Profesional Art Printing Data',
    description: `A daily selection of privately
    personalized reads; no accounts or
    sign-ups required. has been the
    industry's standard`,
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
  {
    title: 'Profesional Art Printing Data',
    description: `A daily selection of privately
    personalized reads; no accounts or
    sign-ups required. has been the
    industry's standard`,
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
  {
    title: 'Profesional Art Printing Data',
    description: `A daily selection of privately
    personalized reads; no accounts or
    sign-ups required. has been the
    industry's standard`,
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
  {
    title: 'Profesional Art Printing Data',
    description: `A daily selection of privately
    personalized reads; no accounts or
    sign-ups required. has been the
    industry's standard`,
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
  {
    title: 'Profesional Art Printing Data',
    description: `A daily selection of privately
    personalized reads; no accounts or
    sign-ups required. has been the
    industry's standard`,
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
  {
    title: 'Profesional Art Printing Data',
    description: `A daily selection of privately
    personalized reads; no accounts or
    sign-ups required. has been the
    industry's standard`,
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
];

// Recent-Works Desktop Section

const worksContainer = document.querySelector('.works-container');

const desktopCardsContainer = document.createElement('div');
desktopCardsContainer.classList.add('works-cards-desktop');
worksContainer.appendChild(desktopCardsContainer);

projectDetails.forEach((element, i) => {
  if (i === 0) {
    const desktopCardOne = document.createElement('div');
    desktopCardOne.classList.add('works-card-1-desktop');
    desktopCardsContainer.appendChild(desktopCardOne);

    desktopCardOne.innerHTML += `
    
      <div class="works-card-1-image">
        <img src=${projectDetails[i].imgSource[0]} alt="headline-project-preview">
      </div>
      <div class="works-card-1-text">
        <div class="works-card-1-header-container">
          <h3>${projectDetails[i].title}</h3>
        </div>
        <div class="works-card-1-content-container">
          <p class="card-content-1">${projectDetails[0].description}
          </p>
        </div>
        <ul class="tech-stack">
          <li>${projectDetails[i].technologies[1]}</li>
          <li>${projectDetails[i].technologies[0]}</li>
          <li>${projectDetails[i].technologies[2]}</li>
          <li>${projectDetails[i].technologies[3]}</li>
        </ul>
        <button type="button">See Project</button>
      </div>
      </div>
    `;
  } else {
    const desktopCardTwo = document.createElement('div');
    desktopCardTwo.classList.add('works-card-2');
    desktopCardsContainer.appendChild(desktopCardTwo);

    desktopCardTwo.innerHTML += `
          <h4>${projectDetails[i].title}</h4>
          <p class="card-content-2">${projectDetails[i].description}</p>
          <ul class="tech-stack-2">
            <li>${projectDetails[i].technologies[0]}</li>
            <li>${projectDetails[i].technologies[1]}</li>
            <li>${projectDetails[i].technologies[2]}</li>
          </ul>
          <button class="card-2-button" type="button">See Project</button>
      `;
  }
});

// Recent Works Mobile Section

const mobileCardsContainer = document.createElement('div');
mobileCardsContainer.classList.add('works-cards-mobile');
worksContainer.appendChild(mobileCardsContainer);

projectDetails.forEach((element, i) => {
  if (i === 0) {
    const mobileCardOne = document.createElement('div');
    mobileCardOne.classList.add('works-card-1');
    mobileCardsContainer.appendChild(mobileCardOne);

    mobileCardOne.innerHTML += `
      <img src=${projectDetails[i].imgSource[1]} alt="headline-project-preview">
        <h3>${projectDetails[i].title}</h3>
        <p class="card-content-1">${projectDetails[i].description}</p>
        <ul class="tech-stack">
            <li>${projectDetails[i].technologies[0]}</li>
            <li>${projectDetails[i].technologies[1]}</li>
            <li>${projectDetails[i].technologies[2]}</li>
            <li>${projectDetails[i].technologies[3]}</li>
        </ul>
        <button type="button" class="button">See Project</button>
    `;
  } else {
    const mobileCardTwo = document.createElement('div');
    mobileCardTwo.classList.add('works-card-2');
    mobileCardsContainer.appendChild(mobileCardTwo);

    mobileCardTwo.innerHTML = `
    <h4>${projectDetails[i].title}</h4>
    <p class="card-content-2">${projectDetails[i].description}</p>
    <ul class="tech-stack-2">
      <li>${projectDetails[i].technologies[0]}</li>
      <li>${projectDetails[i].technologies[1]}</li>
      <li>${projectDetails[i].technologies[2]}</li>
    </ul>
    <button class="card-2-button" type="button">See Project</button>
    `;
  }
});
// Form Validation Section
function isUpper(value) {
  const condition = /[A-Z]/;
  if (!condition.test(value)) {
    return false;
  }
  return true;
}

const contactForm = document.querySelector('form');
const userEmail = contactForm.querySelector('#email');
const errorMessage = document.querySelector('.contact-form-button');

function validateEmail(event) {
  const userEmailInput = userEmail.value;
  const checkUpper = isUpper(userEmailInput);
  if (!checkUpper) {
    errorMessage.classList.add('hide');
    return;
  }
  event.preventDefault();
  errorMessage.classList.remove('hide');
}

userEmail.addEventListener('change', validateEmail);
contactForm.addEventListener('submit', validateEmail);
// Toggle Mobile Menu

function toggleClasses() {
  const mobileMenu = document.getElementsByClassName('mobile-menu')[0];
  mobileMenu.classList.toggle('open');
}

toggleClasses();
toggleClasses();
