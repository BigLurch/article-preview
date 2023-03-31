const siteMenu = () => {
    //Get elements form DOM
    const menuButton = document.querySelector('.preview-card__share')
    const menu = document.querySelector('.preview-card-menu')

    // Toggle menu
    const toggleMenu = () => {
        menu.classList.toggle('preview-card-menu--select')
        menuButton.classList.toggle('preview-card__share--select')
    }

    // Create event
    menuButton.addEventListener('click', toggleMenu)
    
}

siteMenu()