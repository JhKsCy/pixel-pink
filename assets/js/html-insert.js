function addHTML() {
    var footer = document.getElementById("footer");
    var contentHTML = `
        <div class="footer__icon">
            <img src="../img/icon-wb.png" alt="Pixel-pink-icon">
        </div>
        <div>
            <h4>
                Explora
            </h4>
            <ul>
                <li><a href="">
                    Ropa
                </a></li>
                <li><a href="">
                    Accesorios
                </a></li>
                <li><a href="">
                    Preventa
                </a></li>
            </ul>
        </div>
        <div>
            <h4>
                Conócenos
            </h4>
            <ul>
                <li><a href="">
                    Nuestra historia
                </a></li>
                <li><a href="">
                    Deskarito
                </a></li>
                <li><a href="">
                    MrsParkDo
                </a></li>
            </ul>
        </div>
        <div>
            <h4>
                Contáctanos
            </h4>
            <ul>
                <li>+57 3239068680</li>
                <li>soporte@pixel-pink.co</li>
                <li>Cra 19 #70a - 58</li>
            </ul>
        </div>
        <div class="footer__social">
            <a href="https://www.instagram.com/" target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.tiktok.com/" target="_blank">
                <i class="fa-brands fa-tiktok"></i>
            </a>
            <a href="https://discord.com/" target="_blank">
                <i class="fa-brands fa-discord"></i>
            </a>
        </div>
    `;

    footer.innerHTML = contentHTML;
}
document.addEventListener("DOMContentLoaded", addHTML);