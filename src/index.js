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

const init = async () => {
  DATA.navigation = await getData(`${API_URL}/api/categories`);

  router.on("*", () => {
    renderHeader();
    renderFooter();
  });

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

  router.resolve();
};

init();
