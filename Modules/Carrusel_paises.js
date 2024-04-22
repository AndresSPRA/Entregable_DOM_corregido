const imgA = ["images/Latam_map.gif","images/africa-time-zone-map.gif","images/asia-time-zone-map.gif"]
let ActualImg = 0

export const Builder__carrusel = (element,id) => {

    const changeImg = (Array,accion) => {
      if (accion == "+") {
        ActualImg > (Array.length-2)?ActualImg = 0:ActualImg++;
        document.getElementById(id).src = imgA[ActualImg]
        document.getElementById(id).alt = ActualImg
      }else if (accion == "-")  {
        ActualImg === 0?ActualImg = (Array.length-1):ActualImg--;
        document.getElementById(id).src = imgA[ActualImg]
        document.getElementById(id).alt = ActualImg
      }

    }

    const img = document.createElement('img')
    const Section = document.createElement('section')
    const avanzar = document.createElement('button')
    const retroceder = document.createElement('button')
  
    img.src = "images/Latam_map.gif"
    img.alt = "0"
    img.className = "imgContents text"
    id?img.id = id:null;
  
    Section.className = "Section__root"

    retroceder.textContent = "<"
    retroceder.addEventListener('click', () => {changeImg(imgA,"-")})
    retroceder.addEventListener('mouseover',() => {retroceder.style.backgroundColor = "#797a7a"})
    retroceder.addEventListener('mouseout',() => {retroceder.style.backgroundColor = "transparent"})
    retroceder.className = "ButtonC text"

    avanzar.textContent = ">"
    avanzar.addEventListener('click', () => {changeImg(imgA,"+")})
    avanzar.addEventListener('mouseover',() => {avanzar.style.backgroundColor = "#797a7a"})
    avanzar.addEventListener('mouseout',() => {avanzar.style.backgroundColor = "transparent"})
    avanzar.className = "ButtonC text"
    
  
    img.style = "padding: 0; margin: 0"
    Section.style = "background-color: #333;  border-radius: 8%; padding: 0.9em 2em; display: flex; border-radius: 1em"
    retroceder.style = "color: #f0f0f0; font-size: 3em; background-color: transparent; border: none; border-radius: 1em 0 0 1em"
    avanzar.style = "color: #f0f0f0; font-size: 3em; background-color: transparent; border: none; border-radius: 0 1em 1em 0"

    
    Section.appendChild(retroceder)
    Section.appendChild(img)
    Section.appendChild(avanzar)
    document.getElementById(element).appendChild(Section)
  }

