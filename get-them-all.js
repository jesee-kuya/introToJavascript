const getArchitects = () => {
    return [
        document.querySelector('body a'),
        document.querySelector('body span'),
    ]
}

const getClassical = () => {
    return [
        document.querySelector('a.classical'),
        document.querySelector('a:not(.classical)'),
    ]
}

const getActive = () => {
    return [
        document.querySelector('a.classical.active'),
        document.querySelector('a.classical:not(.active)'),
    ]
}

const getBonannoPisano = () => {
    return [
        document.getElementById('BonannoPisano'),
        document.querySelectorAll('body a'),
    ]
}


