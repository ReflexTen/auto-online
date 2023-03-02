'use strict'

const questionsBtn = document.querySelectorAll('.questions__item-wrapper')
const questionsText = document.querySelectorAll('.questions__item-text')

questionsBtn.forEach(el => {
  el.addEventListener('click', () => {
    const selectedText = el.closest('.questions__item').children[1]

    const btn = el.closest('.questions__item').children[0].children[1]
    console.log(btn)

    if (selectedText.classList.contains('active')) {
      selectedText.classList.remove('active')
    } else {
      selectedText.classList.add('active')
    }

    questionsText.forEach(item => {
      if (item !== selectedText) {
        item.classList.remove('active')
      }
    })
  })
})

// buttonClose.classList.remove()
