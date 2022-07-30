import ScrollSuave from "./modules/scroll-suave.js";
import AcordeonList from "./modules/acordeon-list.js";
import interactImages from "./modules/interacao-imagem.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdow-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initAnimaNumeros from "./modules/anima-numeros.js";
import initFuncionamento from "./modules/horario-funcionamento.js";
import initFetchAnimais from "./modules/fatch-animais.js";
import initfetchBitcoint from "./modules/fetch-bitcoint.js";
import scrollAnimado from "./modules/scroll-animado.js";
const scrollSuave = new ScrollSuave(".menu a[href^='#']");
scrollSuave.init();
const acordeonList = new AcordeonList(".faq dt");
acordeonList.init();

scrollAnimado();

interactImages();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initAnimaNumeros();
initFuncionamento();
initFetchAnimais();
initfetchBitcoint();
