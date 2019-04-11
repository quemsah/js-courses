//неск случайных символов
const random = () => Math.random().toString(36).substring(7);
class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign
    }
    append() {
        this.div = document.createElement("div");
        let stl = this.div.style;
        stl.height = this.height + "px";
        stl.width = this.width + "px";
        stl.background = this.bg;
        stl.fontSize = this.fontSize;
        stl.textAlign = this.textAlign;
        this.div.textContent = random();
        document.body.appendChild(this.div)
    }
}
let newDiv = new Options(42, 210, '#ffff45', '33px', 'center');
newDiv.append()