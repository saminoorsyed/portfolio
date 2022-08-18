

const panels = document.querySelectorAll('.panel')

function toggleOpen(){
    console.log('the functions')
    this.classList.toggle('open');
};

function toggleActive(e){
    // this.classList.toggle('open-active'); doesnt work because there are multiple transitions
    console.log('hello')
    if (e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
    };
};

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));