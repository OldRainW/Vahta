let el1 = document.getElementById('first-mask-phone')
let el2 = document.getElementById('second-mask-phone')

let maskOptions = {
    mask: '+{7}(000)000-00-00',
}

new IMask(el1, maskOptions)
new IMask(el2, maskOptions)