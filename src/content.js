const addCss = () => {
    const css = document.createElement('style')
    
    const text = `
    .CommentRenderer {
        -webkit-mask-image: linear-gradient(to right, black, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.2) 70%, black);
        mask-image: linear-gradient(to right, black, rgba(0,0,0,0.2)  30%, rgba(0,0,0,0.2)  70%, black);
    }
    `
    const textContent = document.createTextNode(`${text}`)
    css.appendChild(textContent)
    document.head.appendChild(css)
}

window.onload = () => {
    addCss()
}