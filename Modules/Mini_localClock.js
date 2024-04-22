//Obtener hora local
//Gmt offset es para calcular de otros paises con respecto a la hora local
const GetHHMMSS = () =>{
    const gmt_offset = document.getElementById("Carrusel_1").alt
    const ActualH = new Date()
    let Pais = "Colombia Bogota UTC-5"

    switch (gmt_offset) {
        case "1":
          Pais = "Egipto El Cairo UTC+2";
          ActualH.setHours(ActualH.getHours() + 7);
          break;
        case "2":
          Pais = "China Shangai UTC+8";
          ActualH.setHours(ActualH.getHours() + 13);
          break;
        default:
          break;
      }
    return ActualH.toTimeString().slice(0,8) + ' ' + Pais
    }

//Renderizar reloj
export const Builder__clock = (element,id) => {
    const h3 = document.createElement('h3')
    const Section = document.createElement('section')

    h3.textContent = "00:00:00"
    h3.className = "ClockContents text"
    id?h3.id = id:null;

    Section.className = "Section__root"

    h3.style = "Color: #fff;  font-size: 2em; padding: 0.2; margin: 0;"
    Section.style = "background-color: #333;  border-radius: 8%;  flex-wrap: wrap; padding: 0.1em 3em; margin: 10px"
  
    Section.appendChild(h3)
    document.getElementById(element).appendChild(Section)

}

//Actualizador de relojes
export const Main__clock = () => {
    const Cclock = document.getElementsByClassName("ClockContents")
    const clocks = [...Cclock]
    clocks.map(clock => clock.textContent = GetHHMMSS())
}
