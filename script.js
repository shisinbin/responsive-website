const main = document.getElementById('main');
const footer = document.getElementById('footer');
const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const menuTopNav = document.getElementById('menuTopNav');
const breakpoint = window.matchMedia(
  '(width < calc(600 / 16 * 1rem))'
);

// const trap = focusTrap.createFocusTrap(menuTopNav, {
//   onDeactivate: () => {
//     closeMobileMenu();
//   },
//   clickOutsideDeactivates: true,
//   escapeDeactivates: true,
// });

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);
breakpoint.addEventListener('change', setupTopNav);

function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  menuTopNav.removeAttribute('inert');
  main.setAttribute('inert', '');
  footer.setAttribute('inert', '');
  animateMenu();
  bodyScrollLockUpgrade.disableBodyScroll(menuTopNav);
  // trap.activate();
  btnClose.focus();
}

function closeMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  menuTopNav.setAttribute('inert', '');
  main.removeAttribute('inert');
  footer.removeAttribute('inert');
  animateMenu();
  bodyScrollLockUpgrade.enableBodyScroll(menuTopNav);
  // trap.deactivate();
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

setupTopNav();
