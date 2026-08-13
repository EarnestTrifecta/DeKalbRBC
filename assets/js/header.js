class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header id="header" class="alt">

                <div id="church-brand">
                    <a href="index.html"> <img src="images/logo3.png" alt="DeKalb Reformed Baptist Church Logo"> 
                    
                    </a>

                    <h1 id="logo">
                        <a href="index.html">
                            DeKalb 
                            <span>Reformed Baptist Church</span>
                        </a>
                    </h1>
                </div>

                <nav id="nav">
                    <ul>
                        <li class="current">
                            <a href="index.html">Welcome</a>
                        </li>

                        <li class="submenu">
                            <a href="#">Menu</a>
                            <ul>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="about-beliefs.html">Our Beliefs</a></li>
                                <li><a href="familyworship.html">Family Worship</a></li>
                                <li><a href="sermons.html">Sermons</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                
                            </ul>
                        </li>

                        <li>
                            <a href="visit.html" class="button primary">
                                Visit Us
                            </a>
                        </li>
                    </ul>
                </nav>

            </header>
        `;
    }
}

customElements.define("my-header", MyHeader);