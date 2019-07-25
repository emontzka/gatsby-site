import _ from 'lodash'

if (typeof window !== `undefined`) {

document.body.addEventListener("click", e => {
    const target = e.target
    if (target.classList.contains('menu-item') || target.classList.contains('overlay')) {
        document.body.classList.remove('menu-open')
    }
})

function closeMenuDesktop() {
    let width = window.innerWidth
    if (width > 768) {
        document.body.classList.remove('menu-open')
    }
}

window.onresize = _.debounce(closeMenuDesktop, 250)

}
