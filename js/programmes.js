const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
function handleShowContent() {
    const optionsElement = $$("#programmes-section .option .option-btn");
    const contentsElement = $$('.programmes-content .content');
    console.log(optionsElement)
    let currentIndex = 0;
    optionsElement.forEach((element, index) => {
        element.onclick = () => {
            if(index !== currentIndex) {
                // active nav
                optionsElement[currentIndex].classList.remove("active");
                element.classList.add("active");

                // show content
                contentsElement[index].classList.add("show");
                contentsElement[currentIndex].classList.remove("show");
                
                currentIndex = index;

            }
        }
    });
}
handleShowContent();