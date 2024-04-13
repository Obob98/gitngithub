const initApp = () => {
    alert('page loaded successfully')
    logger('everything working just fine')
}

function logger(message) {
    console.log(message)
}

window.addEventListener('DOMContentLoaded', initApp)