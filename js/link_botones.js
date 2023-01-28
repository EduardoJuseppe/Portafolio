const btnRepositorio = document.querySelectorAll(".btnBlanco");
const btnDemo = document.querySelectorAll(".btnAzul");

const repositorios = (e) =>{
    const boton = e.target.id;
    if(boton == 'btnEncriptador')
    window.location.href = "https://github.com/EduardoJuseppe/One_Encriptador";
    else if(boton == 'btnAhorcado')
    window.location.href = "https://github.com/EduardoJuseppe/ONE_Ahorcado";
    else if(boton == 'btnPortafolio')
    window.location.href = "https://github.com/EduardoJuseppe/Portafolio";
    else if(boton == 'btnCygnus')
    window.location.href = "https://github.com/UlisesRomanMartinezBello/proyecto_cygnus";
    else if(boton == 'btnBesins')
    window.location.href = "https://github.com/EduardoJuseppe/Besings";
    else if(boton == 'btnFlexBox')
    window.location.href = "https://github.com/EduardoJuseppe/FlexBox";
    else if(boton == 'btnGrid')
    window.location.href = "https://github.com/EduardoJuseppe/GridCss";
    else if(boton == 'btnArquitectura')
    window.location.href = "https://github.com/EduardoJuseppe/ArquitecturaCss";
    else if(boton == 'btnLayouts')
    window.location.href = "https://github.com/EduardoJuseppe/Layouts";
}

const demos = (e) =>{
    const boton = e.target.id;
    if(boton == 'btnEncriptadorDemo')
    window.location.href = "https://eduardojuseppe.github.io/One_Encriptador/";
    else if(boton == 'btnAhorcadoDemo')
    window.location.href = "https://eduardojuseppe.github.io/ONE_Ahorcado/";
    else if(boton == 'btnPortafolioDemo')
    window.location.href = "https://eduardojuseppe.github.io/Portafolio/";
    else if(boton == 'btnCygnusDemo')
    window.location.href = "https://ulisesromanmartinezbello.github.io/proyecto_cygnus/index.html";
    else if(boton == 'btnBesinsDemo')
    window.location.href = "https://eduardojuseppe.github.io/Besings/";
    else if(boton == 'btnFlexBoxDemo')
    window.location.href = "https://eduardojuseppe.github.io/FlexBox/";
    else if(boton == 'btnGridDemo')
    window.location.href = "https://eduardojuseppe.github.io/GridCss/";
    else if(boton == 'btnArquitecturaDemo')
    window.location.href = "https://eduardojuseppe.github.io/ArquitecturaCss/";
    else if(boton == 'btnLayoutsDemo')
    window.location.href = "https://eduardojuseppe.github.io/Layouts/";
}

btnRepositorio.forEach(boton => {
    boton.addEventListener("click",repositorios);
});

btnDemo.forEach(boton => {
    boton.addEventListener("click",demos);
});



