class Button {

    constructor(width, height, background, value, className, parentSelector) {

        this.width = width;

        this.height = height;

        this.background = background;

        this.value = value;

        this.className = className;

        this.parentSelector = document.querySelector(parentSelector);

    }

    render() {

        const button = document.createElement('button');

        button.setAttribute('type', 'button');

        button.classList.add(this.className);

        button.style.width = this.width + 'px';

        button.style.height = this.height + 'px';

        button.style.background = this.background;

        button.textContent = this.value;

        this.parentSelector.append(button);

        return button;

    }

}

const button = new Button(220, 45, '#39fe07a1', 'Button', 'new__button', '.button').render();