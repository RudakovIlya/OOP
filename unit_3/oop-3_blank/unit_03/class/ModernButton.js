class ModernButton extends Button {

	constructor(width, height, background, value, className, parentSelector, borderRadius = 0) {

		super(width, height, background, value, className, parentSelector);

		this.borderRadius = borderRadius;

	}

	render() {

		const modern = super.render();

		modern.style.borderRadius = this.borderRadius + 'px';

		return modern;

	}

}

const modernButton = new ModernButton(200, 45, 'yellow', 'Modern Button', 'modern__button', '.button', 20).render();

new ModernButton(200, 45, 'yellow', 'Modern Button', 'modern__button', '.button', 20).render();

new ModernButton(200, 35, 'red', 'Modern Button', 'modern__button', '.button', 30).render();

new ModernButton(200, 55, 'blue', 'Modern Button', 'modern__button', '.button', 40).render();

new ModernButton(200, 65, 'green', 'Modern Button', 'modern__button', '.button', 50).render();

new ModernButton(200, 75, 'brown', 'Modern Button', 'modern__button', '.button', 60).render();