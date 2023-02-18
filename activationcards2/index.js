const blocks = document.querySelectorAll('.block')

const descriptions = {
    glute: "pee",
    hitch: "poo",
    calf: "bum",
    quad: "willy",
}

blocks.forEach(block => {
    block.addEventListener('click', (e) => {
        block.classList.toggle('grow');
        
        let currExercise = block.classList[1];
        console.log(currExercise)

        let currDescription = document.querySelector(`.full-description-${currExercise}`);
        console.log(currDescription);
        currDescription.classList.toggle('unhide');
    })
})

blocks.forEach(block => {
    block.addEventListener('mouseenter', () => {
        block.classList.toggle('hover-effect');

        const p = document.createElement('p')

        if (block.classList.contains('glute')){
            p.textContent = "15 reps each leg 2 sets"
        }

        if (block.classList.contains('hitch')){
            p.textContent = "10 reps each leg 3 sets"
        }

        if (block.classList.contains('calf')){
            p.textContent = "20 steps 4 sets "
        }

        if (block.classList.contains('quad')){
            p.textContent = "15s hold each quad 2 sets "
        }

        p.classList.add('description');

        setTimeout(()=>{p.classList.add('shift')}, 100);
        
        block.appendChild(p);

    })
})

blocks.forEach(block => {
    block.addEventListener('mouseleave', (e) => {
        if (block.classList.contains('hover-effect')){
            block.classList.toggle('hover-effect');
            const p = document.querySelector('.description')
            block.removeChild(p);
        }
    })
})