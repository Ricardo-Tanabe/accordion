const arrowOption = document.querySelectorAll('.arrow-selector');
const showContent = document.querySelectorAll('.accordion-item > p')

document.addEventListener('click', (e) => {
    const isInArrowOption = Array.from(arrowOption).some(item => item === e.target);
    if(isInArrowOption) {
        if(e.target.matches('.container, .container *')) {
            const parent = e.target.closest('.container');
            const sibling = parent.nextElementSibling;
            if(!sibling.classList.contains('animation')) {
                sibling.classList.add('animation');
                sibling.style.display = 'block';
            } else {
                sibling.classList.remove('animation');
                sibling.style.display = 'none';
            }
            showContent.forEach(item => {
                if(item !== sibling) {
                    item.classList.remove('animation');
                    item.style.display = 'none';
                } 
            })
        }
    }
})