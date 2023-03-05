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

const hours = document.querySelector('.hours')
const minuts = document.querySelector('.minuts')
const seconds = document.querySelector('.seconds')

const endDate = new Date(2023, 4, 20)

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

  hours.innerHTML = `${addZero(diffHours)} `
  minuts.innerHTML = ` ${addZero(diffMinuts)} `
  seconds.innerHTML = ` ${addZero(diffSeconds)}`
}

setInterval(getTime, 1000)

const buttonRegistration = document.querySelectorAll('.button-participate')
const body = document.querySelector('body')

buttonRegistration.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault()
    body.classList.add('lock')
  })
})

body.addEventListener('click', e => {
  const target = e.target
  if (target.classList.contains('modal')) {
    body.classList.remove('lock')
  }
})

const phoneInput = document.querySelector('.form__input--phone')

phoneInput.addEventListener('click', maskPhone)

function maskPhone() {
  const submitBtn = document.querySelector('.form__button')

  submitBtn.addEventListener('click', e => {
    e.preventDefault()
  })

  const mask = new IMask(phoneInput, {
    mask: '+{7}(000)000-00-00',
    lazy: false,
  })

  phoneInput.addEventListener('input', phoneInputHandler)

  function phoneInputHandler() {
    if (mask.masked.isComplete) {
      submitBtn.classList.add('form__button--active')
    } else {
      submitBtn.classList.remove('form__button--active')
    }
  }
}
