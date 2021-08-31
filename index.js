let input = document.querySelectorAll('input')
let btn = document.querySelector('button')
let div = document.querySelector('div')

btn.onclick = function()
{
    let w = input[0].value;
    let h = input[1].value;
    let bg = input[2].value;

    div.style.width = w + 'px';
    div.style.height = h + 'px';
    div.style.backgroundColor = bg;
}