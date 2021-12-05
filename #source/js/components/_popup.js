const popupLinks = document.querySelectorAll('.popup-link')
const body = document.querySelector('body')
const closePopupElems = document.querySelectorAll('.close-popup') 
let unlock = true;
const timeout = 800;

function openPopup(popup){
  if (popup && unlock){
    const popupActive = document.querySelector('.popup.open')
    popupActive ? closePopup(popupActive, false) : lockBody()
    popup.classList.add('open')
    popup.addEventListener('click', (e) => {
      if (!e.target.closest('.popup__inner')) {
        closePopup(e.target.closest('.popup'))
      }
    })
  }
}
function closePopup(popup, status = true){
  if (unlock){
    popup.classList.remove('open')
    if(status){
      unLockBody()
    }
  }
}

function lockBody(){
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
  body.style.paddingRight = lockPaddingValue
  body.classList.add('lock')
  unlock = false
  setTimeout(() => unlock = true, timeout)
}

function unLockBody(){
  setTimeout(()=> {
    body.style.paddingRight = '0px'
    body.classList.remove('lock')
  }, timeout)

  unlock = false
  setTimeout(() => unlock = true, timeout)
}

popupLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const popupName = link.getAttribute('href').replace('#', '')
    const currentPopup = document.getElementById(popupName)
    console.log(currentPopup)
    openPopup(currentPopup)
    e.preventDefault()
  })
})

closePopupElems.forEach(link => {
  link.addEventListener('click', (e) => {
    closePopup(link.closest('.popup'))
    e.preventDefault()
  })
})

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape'){
    const popupActive = document.querySelector('.popup.open')
    closePopup(popupActive)
  }
})
