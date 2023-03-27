const reqButtons = document.querySelectorAll('.request-call-btn')

reqButtons.forEach(el => {
    el.addEventListener('click', () => document.openModel('request-call-modal'))
})