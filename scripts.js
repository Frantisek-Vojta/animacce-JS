const element = document.getElementById('bouncing');
let zvetsovani;

const maxScale = 25; // jak velke pri nejvetsim bafnuti
const dobaVyskakovani = 250;

function bouncing() {
    if (zvetsovani) {
        element.style.transition = `transform ${dobaVyskakovani}ms ease, background-color ${dobaVyskakovani}ms ease`;
        element.style.transform = `scale(${maxScale})`;
        element.style.backgroundColor = "#ad0909";
        element.style.color = "#fff";
    } else {
        element.style.transition = `transform ${dobaVyskakovani}ms ease, background-color ${dobaVyskakovani}ms ease`;
        element.style.transform = `scale(1)`;
        //todo pridat barvicky
        element.style.backgroundColor = "#fff";
        element.style.color = "#fff";
    }
    zvetsovani = !zvetsovani;  //kdyz je fce bouncing true a podminka se dokonci tak se obrati na false a pak znova na true
}

setInterval(bouncing, 750);
