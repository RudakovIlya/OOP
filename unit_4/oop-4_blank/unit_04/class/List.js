class List {
    constructor(str) {
        this.str = str;

        this.item = this.str;
    }

    render() {
        const ulList = document.createElement('ul');

        this.item.forEach((item) => {
            const liItem = document.createElement('li');

            liItem.textContent = item;

            ulList.append(liItem);
        });

        document.body.append(ulList);

        return ulList;
    }
}

new List(['one', 'two', 'three', 'four']).render();
