const menubtn = document.querySelector('.menuBtn');
let menuOpen = false;
menubtn.addEventListener('click', () => {
    if (!menuOpen){
        menubtn.classList.add('openmenu');
        document.getElementById('container').style.marginLeft="-160px";
        menuOpen = true;
    } else 
    {
        menubtn.classList.remove('openmenu');
        document.getElementById('container').style.marginLeft="0px";
        menuOpen = false;
    }
});