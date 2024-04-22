import { Builder__clock, Main__clock} from "./Modules/Mini_localClock.js";
import { Builder__carrusel } from "./Modules/Carrusel_paises.js";
import { Builder__OC } from "./Modules/modoOC.js";

//estilos del body
document.body.style = "display: flex;   justify-content: center;    align-items: center;    flex-wrap: wrap;    flex-direction: column;  background-color: #3b3b3b; margin: 10px"

//Elementos del root
const Section__Root__Clock = document.createElement('section')
Section__Root__Clock.id = "section__root__clock"
document.body.appendChild(Section__Root__Clock)

const Section__Root__Carrusel = document.createElement('section')
Section__Root__Carrusel.id = "section__root__carrusel"
document.body.appendChild(Section__Root__Carrusel)

const Section__Root__ModoOC = document.createElement('section')
Section__Root__ModoOC.id = "section__root__modooc"
document.body.appendChild(Section__Root__ModoOC)


//Elementos de los modulos
Builder__clock("section__root__clock","Clock_1")
Builder__carrusel("section__root__carrusel","Carrusel_1")
Builder__OC("section__root__modooc")

setInterval(Main__clock,1000)

