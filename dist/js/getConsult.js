const reqButtons = document.querySelectorAll('.consult-button')

reqButtons.forEach(el => {
    el.addEventListener('click', () => document.openModel('get-consult-modal'))
})