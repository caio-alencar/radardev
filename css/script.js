// Mobile
function handleClickMenu(){
    var list = document.querySelector(".menu");
    var listItem = document.querySelectorAll(".menu li");
    var toggle = document.querySelector(".toggleIcon");    

    toggle.addEventListener('click', toggleNav);
    listItem.forEach(e => e.addEventListener('click', closeNav))
    
    function toggleNav(){
        list.classList.toggle('open');
    }

    function closeNav(){
        if(list.classList.contains('open')){
            toggle.click()
        }
    }
}


