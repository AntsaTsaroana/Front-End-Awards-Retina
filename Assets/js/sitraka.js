document.addEventListener("DOMContentLoaded", function(event) { 
	var tabSlide = [
	` <div class="slideEquipe0 entrer">
	<div class="unEquipe" style="background-image: url('Assets/img/team.png');"></div>
	<div class="unEquipe" style="background-image: url('Assets/img/team.png');"></div>
	<div class="unEquipe" style="background-image: url('Assets/img/team.png');"></div>
	<div class="unEquipe" style="background-image: url('Assets/img/team.png');"></div>
	</div>`,
	` <div class="slideEquipe1 entrer">
	<div class="unEquipe" style="background-image: url('Assets/img/team2.jpg');"></div>
	<div class="unEquipe" style="background-image: url('Assets/img/team2.jpg');"></div>
	<div class="unEquipe" style="background-image: url('Assets/img/team2.jpg');"></div>
	<div class="unEquipe" style="background-image: url('Assets/img/team2.jpg');"></div>
	</div>`,
	` <div class="slideEquipe2 entrer">
	<div class="unEquipe" style="background-image: url('Assets/img/team.png');"></div>
	<div class="unEquipe" style="background-image: url('Assets/img/team.png');"></div>
	<div class="unEquipe" style="background-image: url('Assets/img/team.png');"></div>
	<div class="unEquipe" style="background-image: url('Assets/img/team.png');"></div>
	</div>`,
	` <div class="slideEquipe3 entrer">
	<div class="unEquipe" style="background-image: url('Assets/img/team2.jpg');"></div>
	<div class="unEquipe" style="background-image: url('Assets/img/team2.jpg');"></div>
	<div class="unEquipe" style="background-image: url('Assets/img/team2.jpg');"></div>
	<div class="unEquipe" style="background-image: url('Assets/img/team2.jpg');"></div>
	</div>`
	]
	var dot = document.querySelectorAll(".dot") ;
	var newValue = document.querySelector('.newValue')
	if(dot != undefined)
	{
		dot.forEach(function(elem){
			elem.addEventListener('click', function(){
				dot.forEach(function(elema){
					elema.style.background = "lightgrey" ;
				})
				var valDot = this.getAttribute('value') ;
				document.querySelector('.slide').innerHTML = tabSlide[valDot] ;
				this.style.background = 'tomato' ;
			})
		})
	}

});