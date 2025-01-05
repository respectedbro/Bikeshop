import { initResponsiveBlogCards } from "./modules/responsiveBlogCards.js";
import blogCards from "./blogCards.js"

const blogContainer = document.querySelector('.blog-box')
const showAllButton = document.querySelector('.blog-box__show-all')

initResponsiveBlogCards(blogCards, blogContainer, showAllButton)