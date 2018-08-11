
function inicializarInspecciones(texto) {
                var tamanio=getConfigValue("tamanio");
                var inspeccion ="<h1 style='font-size: calc((.4em + " + tamanio + "vmin) + (.4em + " + tamanio + "vmax));font-family:;padding-top: 0px;margin-bottom: 0px;border-top-width: 0px;'>"+texto+"</h1>"               

                $(".textoadd").append(inspeccion);

}

function getConfigValue(keyname) {
    return window.localStorage.getItem(keyname);
}

function setConfigValue(keyname, value) {
    window.localStorage.setItem(keyname, value);
}
