const renderBlogCard = ({image, date, description}) => {
   const div = document.createElement('div')
   div.classList.add('blog-box__card')

   div.innerHTML = `
     <div class="blog-box__card--img">
                            <img src="./src/image/${image}" alt="card">
                        </div>
                        <div class="blog-box__card--info">
                            <p class="card-date">${date}</p>
                            <a href="#" class="card-view">#обзор</a>
                            <p class="card-description">
                                ${description}
                            </p>
                            <span>Подробнее</span>
                        </div>
   `

   return div
}

const appendProductCard = (product, container) => {
   container.prepend(product)
}


const renderBlogCards = (products, container) => {
   container.innerHTML = '';
   products.forEach((product) => {
      const card = renderBlogCard(product)

      appendProductCard(card, container)
   })
}



export {
   renderBlogCards
}