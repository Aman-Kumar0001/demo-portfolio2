function ChangeBackground()
{
    let nav = document.getElementById("nav")
    var scrollvalue=window.scrollY;
    // var navbar=document.getElementById('navbar');
    if(scrollvalue < 40)
    {
        nav.classList.remove('chngecolor')
    }
    else
    {
        nav.classList.add('chngecolor')

    }
    // console.log(scrollvalue);
}

window.addEventListener('scroll', ChangeBackground);