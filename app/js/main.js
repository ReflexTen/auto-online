'use strict'

const questionsBtn = document.querySelectorAll('.questions__item-wrapper')
const questionsItem = document.querySelectorAll('.questions__item')

questionsBtn.forEach(el => {
  el.addEventListener('click', () => {
    const selectedItem = el.closest('.questions__item')

    if (selectedItem.classList.contains('active')) {
      selectedItem.classList.remove('active')
    } else {
      selectedItem.classList.add('active')
    }

    questionsItem.forEach(item => {
      if (item !== selectedItem) {
        item.classList.remove('active')
      }
    })
  })
})

const hours = document.querySelector('.footer__hour')
const minuts = document.querySelector('.footer__minuts')
const seconds = document.querySelector('.footer__seconds')

const endDate = new Date(2023, 2, 4)

function addZero(value) {
  if (String(value).length < 2) {
    return `0${value}`
  }

  return value
}

function getTime() {
  const currentDate = new Date()

  const diff = endDate - currentDate

  const diffHours = Math.floor(diff / (1000 * 60 * 60))

  const diffMinuts = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  const diffSeconds = Math.floor((diff % (1000 * 60)) / 1000)

  // console.log(String(diffHours).length)

  hours.innerHTML = `${addZero(diffHours)} :`
  minuts.innerHTML = ` ${addZero(diffMinuts)} :`
  seconds.innerHTML = ` ${addZero(diffSeconds)}`
}

setInterval(getTime, 1000)
