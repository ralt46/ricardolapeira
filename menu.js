class MyMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-sm navbar-expand-md navbar-expand-lg navbar-expand-xl navbar-light" style="background-color: #F6F4EBf;">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mynavbar">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                            <a class="nav-link" href="../main/index.html" id="home-link"><img src="../images/circle-inactive.png" id="home-icon"></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="../main/services.html">Services</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="../main/portfolio.html">Portfolio</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="../main/blog.html">Blog</a>
                            </li>
                        </ul>
                        <div>
                            <a href="contact.html"><button class="btn btn-primary" type="button">Contact</button></a>
                        </div>
                    </div>
                </div>
            </nav>
        `;

        this.setActiveLink();
    }

    setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = this.querySelectorAll('.nav-link');
        const homeIcon = this.querySelector('#home-icon');
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            
            if (linkPage === currentPage) {
                link.classList.add('active');
            
                // Special case: If home link is active, change the image
                if (link.id === 'home-link') {
                    homeIcon.src = '../images/circle-active.png';
                }
            }
        });
    }
}

customElements.define('my-menu', MyMenu)
