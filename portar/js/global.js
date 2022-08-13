async function load(page){
    var response = await fetch(page);
    var content = await response.text();
    return content;
}

class Header extends HTMLElement {
    constructor() {
        super();
    }
  
    async connectedCallback() {
        this.innerHTML = `
        <style>
            ${await load('../css/header.css')}
        </style>
        `;
        this.innerHTML += await load('../pages/header.html');
    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
    }
  
    async connectedCallback() {
        this.innerHTML = `
        <style>
            ${await load('../css/footer.css')}
        </style>
        `;
        this.innerHTML += await load('../pages/footer.html');
    }
}
  
customElements.define('header-component', Header);
customElements.define('footer-component', Footer);