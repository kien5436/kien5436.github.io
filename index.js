let i18n = null;

window.addEventListener('load',  async () => {

  await fetchContent();
  styleNavbar();
  renderLanguage();
  greet();
  navbarEvents();

}, false);

window.addEventListener('scroll', debounce(styleNavbar, 150), false);

function getLanguage(preferUserLanguage = true) {
  return preferUserLanguage ? navigator.language : document.documentElement.getAttribute('lang');
}

function renderLanguage(preferUserLanguage = true) {

  const lang = getLanguage(preferUserLanguage);
  const i18nEls = document.querySelectorAll('[data-i18n]');

  for (let i = 0; i < i18nEls.length; i++) {

    const element = i18nEls[i];
    element.innerText = i18n.hasOwnProperty(lang) && i18n[lang].hasOwnProperty(element.dataset.i18n) ? i18n[lang][element.dataset.i18n] : i18n.en[element.dataset.i18n];
  }
}

function navbarEvents() {

  const navbarBurger = document.querySelector('.navbar-burger');
  const navbarMenu = document.getElementById('navbarMenu');

  navbarBurger.addEventListener('click', () => {

    navbarBurger.classList.toggle('is-active');
    navbarMenu.classList.toggle('is-active');
  }, false);

  document.querySelectorAll('.navbar-item.is-clickable').forEach((el) => {

    el.addEventListener('click', () => {

      document.documentElement.setAttribute('lang', el.dataset.lang);
      renderLanguage(false);
      greet();
    }, false);
  });
}

function debounce(func, wait, immediate = false) {
	let timeout;
	return function() {
		const context = this, args = arguments;
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

async function fetchContent() {

  const res = await fetch('/content.json');
  i18n = await res.json();

  for (const lang in i18n) {

    if (i18n.hasOwnProperty(lang)) {

      const dict = i18n[lang];

      for (const key in dict) {

        if (dict.hasOwnProperty(key)) {

          if ('aboutDescription' === key) {

            const year = new Date().getFullYear();
            const age = year - 1997;
            const expYears = year - 2017;

            dict[key] = dict[key].replace('{age}', age).replace('{expYears}', expYears);
          }
          else if ('greeting' === key) {

            const hour = (new Date()).getHours();
            let time = null;

            if (time >= 5 && time < 12) {
              time = dict.goodMorning;
            }
            else if (time >= 12 && time < 6) {
              time = dict.goodAfternoon;
            }
            else {
              time = dict.goodNight;
            }

            dict[key] = dict[key].replace('{time}', time);
          }
        }
      }
    }
  }
}

function styleNavbar() {

  const navbar = document.querySelector('.navbar');

  if (window.scrollY >= window.innerHeight - 80) {

    navbar.style.setProperty('background', '#363636', 'important');
  }
  else {
    navbar.style.setProperty('background', 'none');
  }
}

function greet() {

  const greetEl = document.getElementById('greeting');

  greetEl.classList.add('greeting');

  setTimeout(() => greetEl.classList.remove('greeting'), 3000);
}