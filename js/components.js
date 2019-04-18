class Title {
    constructor(title) {
        this.title = title;
        this.content = document.querySelector(`.content[data-tab="${this.title.dataset.tab}"]`);
        this.content = new Content(this.content);
        this.title.addEventListener('click', () => this.titleClick());
    }
    titleClick() {
        this.content.toggleContent();
    };
}


class Content {
    constructor(content) {
        this.paragraph = content;
    }
    toggleContent() {
        this.paragraph.classList.toggle('change');
    }
}

const titles = document.querySelectorAll(".title");
console.log(titles);
titles.forEach(function(title) {
    return new Title(title);
});

console.log(Title);