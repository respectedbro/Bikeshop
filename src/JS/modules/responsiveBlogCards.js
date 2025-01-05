import { blogDescriptionCards } from "./blogDescriptionCards.js";
import { renderBlogCards } from "./productCards.js";

export const initResponsiveBlogCards = (
  blogCards,
  blogContainer,
  showAllButton
) => {
  let isAllCardsVisible = false;
  const loader = document.querySelector(".blog-loader");

  const showLoader = () => {
    loader.style.display = "flex";
  };

  const hideLoader = () => {
    loader.style.display = "none";
  };

  const renderCardsAsync = async (cards) => {
    showLoader();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    renderBlogCards(cards, blogContainer);
    hideLoader();
    blogDescriptionCards();
  };

  const handleResponsiveRender = () => {
    const isSmallScreen = window.innerWidth <= 710;

    if (isSmallScreen && !isAllCardsVisible) {
      renderCardsAsync(blogCards.slice(0, 4));
    } else {
      renderCardsAsync(blogCards);
    }
  };

  const handleShowAllClick = () => {
    isAllCardsVisible = !isAllCardsVisible;
    handleResponsiveRender();
    showAllButton.textContent = isAllCardsVisible ? "Скрыть" : "Показать все";
  };

  window.addEventListener("resize", handleResponsiveRender);
  showAllButton.addEventListener("click", handleShowAllClick);

  handleResponsiveRender();
};
