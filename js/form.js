$(document).ready(function(rf)
{

    const slidePage = document.querySelector('.slidepage');
    const firstNextBtn = document.querySelector('.nextBtn');

    const prevBtnSec = document.querySelector('.prev-1');
    const nextBtnSec = document.querySelector('.next-1');

    const prevBtnThird = document.querySelector('.prev-2');
    const nextBtnThird = document.querySelector('.next-2');

    const prevBtnFourth = document.querySelector('.prev-3');
    const submitBtn = document.querySelector('.submit');

    let max = 4;
    let current = 1;

    $('button[name="next"]').click(function(e)
    {
        e.preventDefault();
        
        alert($(this).attr('to'));

        e.stopImmediatePropagation();
    });

    $('button[name="prev"]').click(function(e)
    {
        e.preventDefault();
        
        alert($(this).attr('to'));

        e.stopImmediatePropagation();
    });


    // Next
    firstNextBtn.addEventListener('click', function(e)
    {
    slidePage.style.marginLeft = '-25%';
    current++;
    });

    nextBtnSec.addEventListener('click', function(e)
    {
    slidePage.style.marginLeft = '-50%';
    current++;
    });

    nextBtnThird.addEventListener('click', function(e)
    {
    slidePage.style.marginLeft = '-50%';
    current++;
    });

    submitBtn.addEventListener('click', function(e)
    {
    current++;
    });


    // Prev
    prevBtnSec.addEventListener('click', function(e)
    {
    slidePage.style.marginLeft = '0%';
    current--;
    });

    prevBtnThird.addEventListener('click', function(e)
    {
    slidePage.style.marginLeft = '-25%';
    current--;
    });

    prevBtnFourth.addEventListener('click', function(e)
    {
    slidePage.style.marginLeft = '-50%';
    current--;
    });
});