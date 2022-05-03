class Modal {
    constructor(toggle, location) {
        this.modalTemplate = document.querySelector('#modal_template');
        this.toggle = toggle;
        this.location = location;

        document.querySelector('.hamburger').addEventListener('click', () => {

            if (document.querySelector('.modal')) {
                this.hide();
                document.querySelector(this.toggle).classList.remove('is-active');
            } else {
                this.show();
                document.querySelector(this.toggle).classList.add('is-active');
            }
        })
    }

    show() {               // show: function() {}
        if (!'content' in document.createElement('template')) { // for IE11, as from june 2022 ie11 will be dead so this check will not be needed
            const modal = document.createElement('div');
            modal.classList.add('modal');
            const navList = document.createElement('ul');
            navList.classList.add('nav-list');
            navList.innerHTML = `
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
                `;
            modal.appendChild(navList);
            document.querySelector(this.location).appendChild(modal);

        }
        const modal = document.importNode(this.modalTemplate.content, true);
        document.querySelector(this.location).appendChild(modal);
        setTimeout(() => {
            document.querySelector('.modal').classList.toggle('is-active');
        }, 100);
    }
    hide() {               // hide: function() {}
        document.querySelector('.modal').classList.toggle('is-active');
        setTimeout(() => {
            document.querySelector(this.location).removeChild(document.querySelector('.modal'));

        }, 300);

    }
}
const modal = new Modal('.hamburger', 'header');