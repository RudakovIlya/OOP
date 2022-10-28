class List2 extends List {

    constructor(str, cssClass) {

        super(str);

        this.cssClass = cssClass;

    }

    render() {

        const newUl = super.render();

        newUl.classList.add(this.cssClass);

        return

    }
}

const twoUl = new List2(['Ilya', 'Dima', 'Yana', 'Andrei'], 'menu').render();
