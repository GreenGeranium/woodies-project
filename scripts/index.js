const linksMenu = document.querySelectorAll(".menu__link");
const cellsOfTable = Array.from(
  document.querySelectorAll(".table-catalog__cell")
);
const sumOfAll = {
  sumElectronics: 0,
  sumChair: 0,
  sumLibrary: 0,
  sumTable: 0,
  sumKitchen: 0,
};

let sumOfArticles = document.querySelector("#sumOfArticles");

//Открытие картинки в новом окне
const exampleOfImage = Array.from(document.querySelectorAll(".example-image"));
exampleOfImage.forEach((image) => {
  image.addEventListener("click", () => {
    const openedPage = window.open("");
    openedPage.document.write(
      `<html lang="ru">
        <head>
          <meta charset="UTF-8" />
          <title>Woodies</title>
          <link rel="stylesheet" href="../styles/index.css" />
          <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"/>
        </head>
        <body style='
        display: flex; 
        height: 100%; 
        width: 100%;
        background-color: black; 
        flex-direction: column; 
        align-items: center; 
        justify-content: center;'>
        <img src='${image.src}' style='width: 600px; height: 400px; object-fit: contain;'>
        </body>
      </html>`
    );
  });
});

//Просчет итога в ячейке

cellsOfTable.forEach((cell) => {
  const quantityInput = cell.querySelector(".table-catalog__input");
  const sumCell = cell.querySelector(".table-catalog__sum");
  const priceCell = cell.querySelector(".table-catalog__price");
  quantityInput.addEventListener("input", () => {
    sumCell.textContent = `${
      quantityInput.value * Number(priceCell.textContent.replace(/\D+/g, ""))
    } рублей`;
    //вычисление суммы всех продуктов
    switch (sumCell.id) {
      case "qntTable":
        sumOfAll.sumTable = Number(sumCell.textContent.replace(/\D+/g, ""));
        break;
      case "qntChair":
        sumOfAll.sumChair = Number(sumCell.textContent.replace(/\D+/g, ""));
        break;
      case "qntKitchen":
        sumOfAll.sumKitchen = Number(sumCell.textContent.replace(/\D+/g, ""));
        break;
      case "qntLibrary":
        sumOfAll.sumLibrary = Number(sumCell.textContent.replace(/\D+/g, ""));
        break;
      case "qntElectronics":
        sumOfAll.sumElectronics = Number(
          sumCell.textContent.replace(/\D+/g, "")
        );
        break;
    }
    console.log(Object.values(sumOfAll));
    let sumOfPrices = Object.values(sumOfAll).reduce(function (
      currentSum,
      currentNumber
    ) {
      return currentSum + currentNumber;
    },
    0);
    console.log("Общая сумма покупки-", sumOfPrices, "рублей");
    sumOfArticles.value = sumOfPrices;
    if (sumOfPrices < 2000) {
      alert("Сумма заказа меньше 2000 рублей!");
    }
  });
});

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
    linksMenu[3].classList.add("menu__link_active");
    break;
  case "categories":
    linksMenu[4].classList.add("menu__link_active");
    break;
  case "contact":
    linksMenu[5].style.filter =
      "invert(82%) sepia(64%) saturate(3091%) hue-rotate(347deg) brightness(91%) contrast(86%)";
    break;
}

//отображение ссылки на преимущества активной при скролле
if (section.className === "description") {
  linksMenu[6].classList.add("menu__link_active");
  window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll);
    if (scroll >= 0 && scroll < 946) {
      linksMenu[6].classList.add("menu__link_active");
      linksMenu[7].classList.remove("menu__link_active");
      linksMenu[8].classList.remove("menu__link_active");
    }
    if (scroll > 946) {
      linksMenu[7].classList.add("menu__link_active");
      linksMenu[6].classList.remove("menu__link_active");
      linksMenu[8].classList.remove("menu__link_active");
    }
    if (scroll > 1500) {
      linksMenu[8].classList.add("menu__link_active");
      linksMenu[7].classList.remove("menu__link_active");
      linksMenu[2].classList.add("menu__link_active");
      linksMenu[1].classList.remove("menu__link_active");
    } else {
      linksMenu[2].classList.remove("menu__link_active");
      linksMenu[1].classList.add("menu__link_active");
    }
  });
}
