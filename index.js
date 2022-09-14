const yesBtn = document.querySelector('#yesBtn');


yesBtn.addEventListener('click',function () {
    alert('Pelotita tiste, Te amo con mi vida princesita chiquitita, de verdad sere mejor novio, perdoname por no estar cuando me neceistas, de verdad lo lamento no te dejare sola si me importas muchisimo mas que nada en el mundo, TE AMO')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})