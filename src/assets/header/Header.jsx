import './Header.css'

export const Header = () => {

    return (
        <header className="header">

            <div className="header__social">
                <div className="header__container">

                    <ul className="header__social__list">

                        <li className="header__social__list--item header__social__list--item--left">
                            <ion-icon name="logo-facebook"></ion-icon>

                            <a href="https://www.facebook.com/proatencionmedica" className="header__social__list--link">Facebook</a>
                        </li>

                        <li className="header__social__list--item header__social__list--item--left">
                            <ion-icon name="logo-whatsapp"></ion-icon>

                            <a href="https://api.whatsapp.com/send?phone=523329147808&text=%C2%A1Hola%20N%C3%BAcleo%20Dental!"
                                className="header__social__list--link">+52 1 33 2914 7808</a>
                        </li>

                    </ul>

                    <ul className="header__social__list">
                        <li className="header__social__list--item header__social__list--item--right">
                            <a className="header_social_list--link" href="https://api.whatsapp.com/send?phone=523329147808&text=%C2%A1Hola%20N%C3%BAcleo%20Dental!">
                                <ion-icon name="logo-whatsapp"></ion-icon>
                            </a>
                        </li>

                        <li className="header__social__list--item header__social__list--item--right">
                            <a className="header_social_list--link" href="https://www.facebook.com/proatencionmedica">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>

                        <li className="header__social__list--item header__social__list--item--right">
                            <a className="header_social_list--link" href="https://www.instagram.com/nucleodental.mzo/">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>

                        <li className="header__social__list--item header__social__list--item--right">
                            <a className="header_social_list--link" href="tel:3329147808">
                                <ion-icon name="call-outline"></ion-icon>
                            </a>
                        </li>

                    </ul>

                </div>
            </div>

            <div className="header-bottom" data-header>
                <div className="header__container">

                    <a href="#" className="logo">Núcleo Dental</a>

                    <nav className="navbar container" data-navbar>
                        <ul className="navbar-list">

                            <li>
                                <a href="#home" className="navbar-link" data-nav-link>Inicio</a>
                            </li>

                            <li>
                                <a href="#service" className="navbar-link" data-nav-link>Servicios</a>
                            </li>

                            <li>
                                <a href="#about" className="navbar-link" data-nav-link>Tratamientos</a>
                            </li>

                            <li>
                                <a href="#blog" className="navbar-link" data-nav-link>Nosotros</a>
                            </li>


                        </ul>
                    </nav>

                    <a href="https://api.whatsapp.com/send?phone=523329147808&text=%C2%A1Hola%20N%C3%BAcleo%20Dental!"
                        className="btn">Enviar whatsapp</a>

                    <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
                        <ion-icon name="menu-sharp" aria-hidden="true" class="menu-icon"></ion-icon>
                        <ion-icon name="close-sharp" aria-hidden="true" class="close-icon"></ion-icon>
                    </button>

                </div>
            </div>

        </header>
    )
}