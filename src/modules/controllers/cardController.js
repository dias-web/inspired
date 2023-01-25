import { DATA } from "../const";
import { renderCard } from "../render/renderCard";
import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";
import { renderProducts } from "../render/renderProducts";

export const cardController = async (routerData) => {
  const { id } = routerData.data;

  const data = await getData(`${API_URL}/api/goods/${id}`);
  const { gender, category } = data;
  renderNavigation({ gender, category, render: true });
  // renderHero({ render: false });
  renderCard({ data, render: true });
  renderProducts({
    title: "Вам также может понравиться",
    params: { count: 4, gender },
    render: true,
  });
  //renderCart({render: false});
  //renderOrder({render: false});
};
