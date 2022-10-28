class Button {

    constructor(width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }

    render() {

        const button = document.createElement('button');

        button.setAttribute('type', 'button');

        button.style.background = this.background;

        button.textContent = this.value;

        button.style.width = this.width + 'px';

        button.style.height = this.height + 'px';

        document.querySelector('.button').append(button);
    }
}

const button = new Button(200, 50, 'green', 'new Button').render();