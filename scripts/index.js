const linksMenu = document.querySelectorAll(".menu__link");

//ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК
const section = document.querySelector("section");
switch (section.className) {
  case "starting":
    linksMenu[0].classList.add("menu__link_active");
    break;
  case "description":
    linksMenu[1].classList.add("menu__link_active");
    break;
  case "principles":
    linksMenu[2].classList.add("menu__link_active");
    break;
  case "categories":
    linksMenu[3].classList.add("menu__link_active");
    break;
  case "contact":
    linksMenu[4].style.filter =
      "invert(82%) sepia(64%) saturate(3091%) hue-rotate(347deg) brightness(91%) contrast(86%)";
    break;
}
