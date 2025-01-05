import { blogDescriptionCards } from "./blogDescriptionCards.js";
import { renderBlogCards } from "./productCards.js";

export const initResponsiveBlogCards = (blogCards, blogContainer, showAllButton) => {
   let isAllCardsVisible = false;
   const loader = document.querySelector('.blog-loader');

   // Показать лоадер
   const showLoader = () => {
      loader.style.display = "flex";
   };

   // Скрыть лоадер
   const hideLoader = () => {
      loader.style.display = "none";
   };

   // Асинхронный рендеринг блог-карточек
   const renderCardsAsync = async (cards) => {
      showLoader();
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Имитируем задержку в 1 секунду
      renderBlogCards(cards, blogContainer);
      hideLoader();
      blogDescriptionCards();
   };

   const handleResponsiveRender = () => {
      const isSmallScreen = window.innerWidth <= 710;

      if (isSmallScreen && !isAllCardsVisible) {
         // Отображаем первые 4 карточки
         renderCardsAsync(blogCards.slice(0, 4));
      } else {
         // Отображаем все карточки
         renderCardsAsync(blogCards);
      }
   };

   const handleShowAllClick = () => {
      isAllCardsVisible = !isAllCardsVisible;
      handleResponsiveRender();
      showAllButton.textContent = isAllCardsVisible ? "Скрыть" : "Показать все";
   };

   // Слушатели событий
   window.addEventListener("resize", handleResponsiveRender);
   showAllButton.addEventListener("click", handleShowAllClick);

   // Первоначальный рендеринг
   handleResponsiveRender();
};