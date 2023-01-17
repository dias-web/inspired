import "./index.html";
import "./index.scss";

import { router } from "./modules/router";
import { mainPage } from "./modules/mainPage/mainPage";
import { renderFooter } from "./modules/render/renderFooter";
import { renderHeader } from "./modules/render/renderHeader";
import { womanMainPage } from "./modules/mainPage/womanMainPage";
import { manMainPage } from "./modules/mainPage/manMainPage";
import { getData } from "./modules/getData";
import { API_URL, DATA } from "./modules/const";
import { createCssColors } from "./modules/createCssColors";
import { createElement } from "./modules/createElement";

const init = async () => {
  try {
    router.on("*", () => {
      renderHeader();
      renderFooter();
    });

    DATA.navigation = await getData(`${API_URL}/api/categories`);
    DATA.colors = await getData(`${API_URL}/api/colors`);

    createCssColors(DATA.colors);

    router.on("/", () => {
      mainPage();
    });

    router.on("women", () => {
      womanMainPage();
    });

    router.on("men", () => {
      manMainPage();
    });

    // setTimeout(() => {
    //   router.navigate("men");
    // }, 3000);

    // setTimeout(() => {
    //   router.navigate("women");
    // }, 6000);
  } catch (e) {
    createElement(
      "h2",
      {
        textContent: "Что то пошло не так, попробуйте позже...",
      },
      {
        parent: document.querySelector("main"),
        cb(h2) {
          h2.style.textAlign = "center";
        },
      }
    );
  } finally {
    router.resolve();
  }
};

init();
