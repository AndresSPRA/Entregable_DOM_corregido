
export const Builder__OC = (element, id) => {
    const Section = document.createElement('section')
    const btnO = document.createElement('button')
    const btnC = document.createElement('button')

    id?Section.id = id:null;
    Section.className = "Section__root"

    btnO.textContent = "Modo oscuro"
    btnO.addEventListener('click', () => {changeColor(0)})
    btnO.addEventListener('mouseover',() => {btnO.style.backgroundColor = "#797a7a"})
    btnO.addEventListener('mouseout',() => {btnO.style.backgroundColor = "transparent"})
    btnO.className = "text"

    btnC.textContent = "Modo claro"
    btnC.addEventListener('click', () => {changeColor(1)})
    btnC.addEventListener('mouseover',() => {btnC.style.backgroundColor = "#797a7a"})
    btnC.addEventListener('mouseout',() => {btnC.style.backgroundColor = "transparent"})
    btnC.className = "text"


    Section.style = "background-color: #333;  border-radius: 8%; padding: 0.9em 2em; display: flex; border-radius: 1em; margin: 1em"
    btnO.style = "color: #f0f0f0; font-size: 1.2em; background-color: transparent; border: none; border-radius: 1em 0 0 1em"
    btnC.style = "color: #f0f0f0; font-size: 1.2em; background-color: transparent; border: none; border-radius: 0 1em 1em 0"

    Section.appendChild(btnO)
    Section.appendChild(btnC)
    document.getElementById(element).appendChild(Section)
}

const changeColor = (color) => {

    const Section = document.getElementsByClassName("Section__root")
    const sections = [...Section]
    const text = document.getElementsByClassName("text")
    const texts = [...text]
    if (color === 0){
        document.body.style.backgroundColor = "#3b3b3b"
        sections.map(Section => {Section.style.backgroundColor = "#333"})
        texts.map(text => {text.style.color = "#fff"})
    }else{
        document.body.style.backgroundColor = "#c0c0c0"
        sections.map(Section => {Section.style.backgroundColor = "#F2E9E4"})
        texts.map(text => {text.style.color = "#333"})
    }
    
}