class List2 extends List {
    constructor(str, cssClass) {
        super(str);

        this.cssClass = cssClass;
    }

    render() {
        const newUl = super.render();

        newUl.classList.add(this.cssClass);

        return newUl;
    }
}

new List2([1, 2, 2, 3], 'menu').render();
