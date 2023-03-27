const reqButtons = document.querySelectorAll('.presentation__button')

reqButtons.forEach(el => {
    el.addEventListener('click', () => document.openModel('get-presentation-modal'))
})