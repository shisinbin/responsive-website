const main = document.getElementById('main');
const footer = document.getElementById('footer');
const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const menuTopNav = document.getElementById('menuTopNav');
const breakpoint = window.matchMedia('(width < 600px)');

const inertable = [
  main,
  footer,
  btnOpen,
  document.querySelector('.topnav__homelink'),
  document.querySelector('#skip-header-link'),
];

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);
breakpoint.addEventListener('change', setupTopNav);

function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  animateMenu();
  menuTopNav.removeAttribute('inert');
  setInertAll(true);
  bodyScrollLockUpgrade.disableBodyScroll(menuTopNav);
  btnClose.focus();
}

function closeMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  animateMenu();
  menuTopNav.setAttribute('inert', '');
  setInertAll(false);
  bodyScrollLockUpgrade.enableBodyScroll(menuTopNav);
  btnOpen.focus();
}

function animateMenu() {
  menuTopNav.classList.add('animating');

  setTimeout(() => {
    menuTopNav.classList.remove('animating');
  }, 300);
}

function setupTopNav() {
  if (breakpoint.matches) {
    // console.log('is mobile');
    menuTopNav.setAttribute('inert', '');
  } else {
    // console.log('is desktop');
    closeMobileMenu();
    menuTopNav.removeAttribute('inert');
  }
}

function setInertAll(state) {
  inertable.forEach((el) => {
    if (!el) return;
    state
      ? el.setAttribute('inert', '')
      : el.removeAttribute('inert');
  });
}

setupTopNav();
