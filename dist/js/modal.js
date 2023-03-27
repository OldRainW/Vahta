const models = document.querySelectorAll('.modal')

models.forEach(el => {
    setupModel(el)
})

function closeModel(id) {
    const modalID = document.querySelector(`#${id}`)
    modalID.classList.remove('modal-active')
    document.body.style = null
    modalID.classList.remove('_success')
    modalID.classList.remove('_error')
}

function openModel(id) {
    const modalID = document.querySelector(`#${id}`)
    modalID.classList.add('modal-active')
    document.body.style.overflow = 'hidden'
}

document.openModel = openModel

function setupModel(el) {
    const modalExit = el.querySelector('.modal__exit')
    const overlay = el.querySelector('.modal-overlay')

    modalExit.addEventListener('click', () => closeModel(el.id))

    overlay.addEventListener('click', () => closeModel(el.id))
}
