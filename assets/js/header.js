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
                               
                                <li><a href="contact.html">Contact</a></li>

                                <li>
                                <a href="https://give.tithe.ly/?formId=b4edcfd0-2296-4b4b-8aaf-367ee05f789e" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    Give
                                </a>
                                </li>
                                
                            </ul>
                        </li>

                        <li>
                            <a href="index.html#visit" class="button primary">
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