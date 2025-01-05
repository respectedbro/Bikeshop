const blogDescriptionCards = () => {
   const cardDescriptions = document.querySelectorAll('.card-description')
   const blogCardButtons = document.querySelectorAll('.blog-box__card--info > span')


   const truncateText = (text, maxLength) => {
      return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
   }

   cardDescriptions.forEach((p) => {
      p.dataset.fullText = p.textContent
      p.textContent = truncateText(p.textContent, 110)
   });

   blogCardButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
         const description = cardDescriptions[index]

         if (description.textContent.length > 110 && description.textContent.endsWith('...')) {
            description.textContent = description.dataset.fullText
            btn.textContent = 'Свернуть'
         } else {
            description.textContent = truncateText(description.dataset.fullText, 110)
            btn.textContent = 'Подробнее'
         }
      })
   })
}

export {
   blogDescriptionCards
}
