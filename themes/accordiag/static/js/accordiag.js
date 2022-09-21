window.addEventListener('load', ()=>{
    document.querySelectorAll('.accordiag > details > summary').forEach(elem=>{
        elem.addEventListener('click', function(event){
            if (this.parentElement.classList.toggle('open')) Array.from(this.parentElement.parentElement.querySelectorAll(':scope > details.open')).forEach(e=>{
                if (!e.isSameNode(this.parentElement)) e.classList.remove('open');
            })
            event.preventDefault();
        })
    })
})
