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

