const navList = document.querySelectorAll('.nav-item');
const imgList = document.querySelectorAll('.img');

for (let item of navList) {
    item.addEventListener("click", function() {
        this.classList.add('active');
        for (let item of navList) {
            if (item != this) {
                item.classList.remove('active');
            }
        }
        let typeItem = this.getAttribute("data-type");
        for (let img of imgList) {
            if (typeItem != "all") {
                let typeImg = img.getAttribute("data-type");
                if (typeImg != typeItem) {
                    img.style.display = 'none';
                } else {
                    img.style.display = 'block';
                }
            } else {
                img.style.display = 'block';
            }
        }
    })
}