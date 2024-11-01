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
                            <a class="nav-link" href="../main/home.html"><img src="../images/circle.png"></a>
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
        `
    }
}

customElements.define('my-menu', MyMenu)
