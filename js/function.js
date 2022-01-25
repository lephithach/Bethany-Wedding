const btnNavbarShow = document.querySelector(".navbar-container .navbar-show");
const navbarList = document.querySelector(".navbar-container .navbar-list");

btnNavbarShow.onclick = (e) => {
  navbarList.classList.toggle("show");
};
