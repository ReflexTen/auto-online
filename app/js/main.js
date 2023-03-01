'use strict'

const buttonClose = document.querySelectorAll('.questions__item-close')
const questionsText = document.querySelectorAll('.questions__item-text')

buttonClose.forEach(el => {
  el.addEventListener('click', () => {
    const text = el.closest('.questions__item').children[1]
    console.log(text)
    // .children('.questions__item-text')
    text.classList.toggle('active')
  })
})

// buttonClose.classList.remove()
