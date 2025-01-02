import {renderHTML,onClick,setInner} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/element.js";

renderHTML('content', 'content/load.html');

onClick("github",myGithub);
function myGithub(){
    window.open('https://github.com/KucingNanda', '_blank');
}

setInner("tes", "Halo...")
