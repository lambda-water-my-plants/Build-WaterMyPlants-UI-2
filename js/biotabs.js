class Bioblock {
    constructor(block) {
        this.block = block;
        this.info = document.querySelector(`.biotext[data-tab="${this.block.dataset.tab}"]`);
        this.info = new Info(this.info);
        this.block.addEventListener('click', () => this.blockClick());
    }
    blockClick() {
        this.info.toggleInfo();
    };
}

class Info {
    constructor(info) {
        this.paragraph = info;
    }
    toggleInfo() {
        this.paragraph.classList.toggle('change');
    }
}

const bioblocks = document.querySelectorAll(".bioblock");
bioblocks.forEach(function(bioblock) {
    return new Bioblock(bioblock);
});