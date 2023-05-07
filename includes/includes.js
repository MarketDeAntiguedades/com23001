document.getElementById("idMenu").innerHTML =  `
<head>
<a href="index.html" class="enlace op1">Inicio</a>
<a href="recetas.html" class="enlace op2">Recetas</a>
<a href="expositores.html" class="enlace op3">Expositores</a>
<a href="comollegar.html" class="enlace">Como llegar</a>
<a href="quienes-somos.html" class="enlace">Quienes somos</a>
<a href="contacto.html" class="enlace">Contacto</a>
</head>`

document.getElementById("idPieDePagina").innerHTML = `
<footer class="pie-pagina">
<div class="grupo-1">
    <div style=" width: 20%;
    height: 0px;

    border-left: 50px solid #7a6f5d;
    border-right: 50px solid #82bfa0;
    border-bottom: 70px solid #7a6f5d;
    border-top: 70px solid #7a6f5d;">

    </div>
    <div style="display: flex; align-items: center; ">
        <img src="images/logo.jpeg" alt="Placeres de Oriente Logo" style="width:100px;height:100px;">
    </div>
    <div class="box">
<!--                        <h2>SOBRE NOSOTROS</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>-->
    </div>
    <div class="box">
        <h2>PARA SEGUIRNOS</h2>
        <div class="red-social">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-youtube"></a>
        </div>
    </div>
</div>
<div class="grupo-2">
    <small>&copy; 2023 <b>Expo Placeres de Oriente</b> - Todos los Derechos Reservados.</small>
</div>
</footer>
`