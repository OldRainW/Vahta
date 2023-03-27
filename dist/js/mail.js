const modalCall = document.getElementById('request-call-modal')
const modalConsult = document.getElementById('get-consult-modal')
const modalPresentation = document.getElementById('get-presentation-modal')

const formCall = document.getElementById('req-call-form')
const formConsult = document.getElementById('get-consult-form')
const formPresentation = document.getElementById('get-presentation-form')

formCall.addEventListener('submit', (event) => formSend(event, formCall, modalCall))
formConsult.addEventListener('submit', (event) => formSend(event, formConsult, modalConsult))
formPresentation.addEventListener('submit', (event) => formSend(event, formPresentation, modalPresentation))

async function formSend(e, form, modal) {
    e.preventDefault()

    let error = formValidate(form)
    let response

    modal.classList.add('_sending')
    let formData = new FormData(form)
    if (error != 0) {
        response = Response.status = 422
    } else {
        response = await fetch('mail.php', {
            method: 'post',
            body: formData
        })
    }

    modal.classList.remove('_sending')

    if (response.status >= 200 && response.status < 400) {
        modal.classList.add('_success')
        modal.classList.remove('_error')
    }
    else {
        modal.classList.add('_error')
    }

    if (error === 0) form.reset()
}

function formValidate(form) {
    let error = 0
    let formReq = form.querySelectorAll('.-req')

    formReq.forEach(el => {
        const input = el
        formRemoveError(el)

        if (el.classList.contains('-email')) {
            if (emailTest(el)) {
                formAddError(el)
                error++
            }
        } else if (el.classList.contains('-phone')) {
            if (el.value.length != 16) {
                formAddError(el)
                error++
            }
        } else {
            if (el.classList.contains('-name') && el.value === '') {
                formAddError(el)
                error++
            }
        }
    })

    return error
}

function formAddError(input) {
    input.classList.add('_validate-error')
}

function formRemoveError(input) {
    input.classList.remove('_validate-error')
}

function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
}