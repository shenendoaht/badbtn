const quotes = [
    'Oooooh my buttons',
    'Do it again',
    'That tickles',
    'giggity',
    'how dare you!',
    'you tryin to play?',
    'did i say you could do that?',
    'how about you and i do something nassssty',
]
const qtBtn = document.getElementById('quote-btn')
const msg = document.getElementById('message')
const bod = document.getElementById('bod')

qtBtn.addEventListener('click', function(){
    msg.textContent = quotes[Math.floor(Math.random()*quotes.length)]
})