import './Header.css'

export const Header = () => {

    return (
        <header class="header">

            <div class="header__social">
                <div class="header__container">

                    <ul class="header__social__list">

                        <li class="header__social__list--item">
                            <ion-icon name="logo-facebook"></ion-icon>

                            <a href="https://www.facebook.com/proatencionmedica" class="header__social__list--link">Facebook</a>
                        </li>

                        <li class="header__social__list--item">
                            <ion-icon name="logo-whatsapp"></ion-icon>

                            <a href="https://api.whatsapp.com/send?phone=523329147808&text=%C2%A1Hola%20N%C3%BAcleo%20Dental!"
                                class="header__social__list--link">+52 1 33 2914 7808</a>
                        </li>

                    </ul>

                    <ul class="header__social__list">
                        <li class="header__social__list--item">
                            <a class="header_social_list--link" href="https://api.whatsapp.com/send?phone=523329147808&text=%C2%A1Hola%20N%C3%BAcleo%20Dental!">
                                <ion-icon name="logo-whatsapp"></ion-icon>
                            </a>
                        </li>

                        <li class="header__social__list--item">
                            <a class="header_social_list--link" href="https://www.facebook.com/proatencionmedica">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>

                        <li class="header__social__list--item">
                            <a class="header_social_list--link" href="https://www.instagram.com/nucleodental.mzo/">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>

                        <li class="header__social__list--item">
                            <a class="header_social_list--link" href="tel:3329147808">
                                <ion-icon name="call-outline"></ion-icon>
                            </a>
                        </li>

                    </ul>

                </div>
            </div>

            <div class="header-bottom" data-header>
                <div class="header__container">

                    <a href="#" class="logo">Núcleo Dental</a>

                    <nav class="navbar container" data-navbar>
                        <ul class="navbar-list">

                            <li>
                                <a href="#home" class="navbar-link" data-nav-link>Inicio</a>
                            </li>

                            <li>
                                <a href="#service" class="navbar-link" data-nav-link>Servicios</a>
                            </li>

                            <li>
                                <a href="#about" class="navbar-link" data-nav-link>Tratamientos</a>
                            </li>

                            <li>
                                <a href="#blog" class="navbar-link" data-nav-link>Nosotros</a>
                            </li>


                        </ul>
                    </nav>

                    <a href="https://api.whatsapp.com/send?phone=523329147808&text=%C2%A1Hola%20N%C3%BAcleo%20Dental!"
                        class="btn">Enviar whatsapp</a>

                    <button class="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
                        <ion-icon name="menu-sharp" aria-hidden="true" class="menu-icon"></ion-icon>
                        <ion-icon name="close-sharp" aria-hidden="true" class="close-icon"></ion-icon>
                    </button>

                </div>
            </div>

        </header>
    )
}