const getArchitects = () => {
    return [
        document.querySelectorAll('body a'),
        document.querySelectorAll('body span'),
    ]
}

const getClassical = () => {
    return [
        document.querySelectorAll('a.classical'),
        document.querySelectorAll('a:not(.classical)'),
    ]
}

const getActive = () => {
    return [
        document.querySelectorAll('a.classical.active'),
        document.querySelectorAll('a.classical:not(.active)'),
    ]
}

const getBonannoPisano = () => {
    return [
        document.getElementById('BonannoPisano'),
        document.querySelectorAll('a.classical.active'),
    ]
}

export {getArchitects, getClassical, getActive, getBonannoPisano}

