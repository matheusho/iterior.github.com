// ======================= jogando contra computador ==================
x = 0; // iniciando placar
o = 0;// iniciando placar
inicioJogo = "X"; // inicia o jogo com 'X'
var iniciando = 0;
var WinVencedor = "false";
var clicado = 'false';

function jogo_da_velha(id_quadro_Clicado){
	quadro_clidado = document.getElementById(id_quadro_Clicado).innerHTML;
	clicado = 'você';
	if ( quadro_clidado != '') {
				document.getElementById("vencedor").style.visibility="visible";
				document.getElementById("vencedor").innerHTML = " CAMPO JÁ PREENCHIDO! ";
	}
	else{
				if ( WinVencedor != 'false' ) {
						 document.getElementById("vencedor").innerHTML = " COMECE UM NOVO JOGO! ";				   
				}
				else{
						document.getElementById("vencedor").style.visibility="hidden";
						jogando_no_quadro(id_quadro_Clicado);
						
						quadro1 = document.getElementById("quadro_1").innerHTML;
						quadro2 = document.getElementById("quadro_2").innerHTML;
						quadro3 = document.getElementById("quadro_3").innerHTML;
						quadro4 = document.getElementById("quadro_4").innerHTML;
						quadro5 = document.getElementById("quadro_5").innerHTML;
						quadro6 = document.getElementById("quadro_6").innerHTML;
						quadro7 = document.getElementById("quadro_7").innerHTML;
						quadro8 = document.getElementById("quadro_8").innerHTML;
						quadro9 = document.getElementById("quadro_9").innerHTML;

						if ( verificaSeGanhou() == 'false' ){
								 computador(id_quadro_Clicado);
						}
				}
	}
}
function verificaSeGanhou(){
			quadro1 = document.getElementById("quadro_1").innerHTML;
			quadro2 = document.getElementById("quadro_2").innerHTML;
			quadro3 = document.getElementById("quadro_3").innerHTML;
			quadro4 = document.getElementById("quadro_4").innerHTML;
			quadro5 = document.getElementById("quadro_5").innerHTML;
			quadro6 = document.getElementById("quadro_6").innerHTML;
			quadro7 = document.getElementById("quadro_7").innerHTML;
			quadro8 = document.getElementById("quadro_8").innerHTML;
			quadro9 = document.getElementById("quadro_9").innerHTML;

		if ( quadro1 == quadro5 && quadro5 == quadro9 && quadro1 != '' ) { // -> \
						document.getElementById('quadro_9').style.background="rgb(196, 0, 0)";
						document.getElementById('quadro_1').style.background="rgb(196, 0, 0)";
						document.getElementById('quadro_5').style.background="rgb(196, 0, 0)";
						WinVencedor = document.getElementById('quadro_5').innerHTML;
						vencedor(WinVencedor);
			 }
			 if ( quadro3 == quadro5 && quadro5 == quadro7 && quadro3 != '' ) { // -> /
						document.getElementById('quadro_3').style.background="rgb(196, 0, 0)";
						document.getElementById('quadro_5').style.background="rgb(196, 0, 0)";
						document.getElementById('quadro_7').style.background="rgb(196, 0, 0)";
						WinVencedor = document.getElementById('quadro_7').innerHTML;
						vencedor(WinVencedor);
			 }
			 if ( quadro1 == quadro4 && quadro4 == quadro7 && quadro1 != '' ) { // -> |
						document.getElementById('quadro_1').style.background="rgb(196, 0, 0)";
						document.getElementById('quadro_4').style.background="rgb(196, 0, 0)";
						document.getElementById('quadro_7').style.background="rgb(196, 0, 0)";
						WinVencedor = document.getElementById('quadro_7').innerHTML;
						vencedor(WinVencedor);
			 }
			 if ( quadro2 == quadro5 && quadro5 == quadro8 && quadro5 != '' ) { //-> ||
						document.getElementById('quadro_2').style.background="rgb(196, 0, 0)";
						document.getElementById('quadro_5').style.background="rgb(196, 0, 0)";
						document.getElementById('quadro_8').style.background="rgb(196, 0, 0)";
						WinVencedor = document.getElementById('quadro_8').innerHTML;
						vencedor(WinVencedor);
			 }
			 if ( quadro3 == quadro6 && quadro6 == quadro9 && quadro3 != '' ) { // -> |||
						document.getElementById('quadro_3').style.background="rgb(196, 0, 0)";
						document.getElementById('quadro_6').style.background="rgb(196, 0, 0)";
						document.getElementById('quadro_9').style.background="rgb(196, 0, 0)";
						WinVencedor = document.getElementById('quadro_9').innerHTML;
						vencedor(WinVencedor);
			 }
			 if ( quadro1 == quadro2 && quadro2 == quadro3 && quadro1 != '' ) { // -> ---
						document.getElementById('quadro_2').style.background="rgb(196, 0, 0)";
						document.getElementById('quadro_1').style.background="rgb(196, 0, 0)";
						document.getElementById('quadro_3').style.background="rgb(196, 0, 0)";
						WinVencedor = document.getElementById('quadro_3').innerHTML;
						vencedor(WinVencedor);
			 }
			 if ( quadro4 == quadro5 && quadro5 == quadro6 && quadro5 != '' ) { // -> --- ---
						document.getElementById('quadro_6').style.background="rgb(196, 0, 0)";
						document.getElementById('quadro_5').style.background="rgb(196, 0, 0)";
						document.getElementById('quadro_4').style.background="rgb(196, 0, 0)";
						WinVencedor = document.getElementById('quadro_4').innerHTML;
						vencedor(WinVencedor);
			 }
			 if ( quadro7 == quadro8 && quadro8 == quadro9 && quadro7 != '' ) { // -> --- --- ---
						document.getElementById('quadro_9').style.background="rgb(196, 0, 0)";
						document.getElementById('quadro_8').style.background="rgb(196, 0, 0)";
						document.getElementById('quadro_7').style.background="rgb(196, 0, 0)";
						WinVencedor = document.getElementById('quadro_7').innerHTML;
						vencedor(WinVencedor);
			 }

			 if ( WinVencedor == 'false' ) {
						nenhumVencedor();
			 }
			 return WinVencedor;
}

function jogando_no_quadro(id_quadro){
	var interior_quadro = document.getElementById(id_quadro).innerHTML;

	if ( interior_quadro == '' && WinVencedor == 'false' ) {
			 document.getElementById(id_quadro).innerHTML = inicioJogo;
			 proximo_obj();
	}
}

function proximo_obj(){
			if ( inicioJogo != "X" ){
					 inicioJogo = "X";
			}
			else{
					inicioJogo = "O";
			}
			document.getElementById('msg').innerHTML = " Proximo jogador: ";
			document.getElementById('inicio').innerHTML = inicioJogo;
}

function computador(id_quadro_Clicado_pelo_jogador){
	clicado = 'computador';
	var interior_quadro = document.getElementById(id_quadro_Clicado_pelo_jogador).innerHTML;
	var quadroAjogar = verificandoGanharPerder(interior_quadro);
	var quadroAganhar = 'false';
	
	if ( interior_quadro == 'X' ) {
			 quadroAganhar = verificandoGanharPerder("O");
	}
	else{
			 quadroAganhar = verificandoGanharPerder("X");
	}

	if ( quadroAganhar != 'false') {
			 jogando_no_quadro(quadroAganhar);
			 verificaSeGanhou();
	}
	else{
			 if ( interior_quadro != 'quadro_5' && quadro5 == '') {
						jogando_no_quadro('quadro_5');
			 }
			 else{
			 			if ( quadroAjogar != 'false' ) {
			 					  jogando_no_quadro(quadroAjogar);
			 			}
			 			else{
								 possibilidade();
			 			}
			 }
	}
	verificaSeGanhou();
}

function possibilidade(){
	var x;
		for ( i=0;i<15;i++ ){
				x =	Math.floor((Math.random()*9)+1);
				if ( document.getElementById('quadro_' + x).innerHTML == '' ) {
							var canto = verificaCantos();
							if ( canto != 'false' ) {
									 jogando_no_quadro(canto);
									 break;
							}
							else{
					 				jogando_no_quadro('quadro_' + x);
					 				verificaSeGanhou();
					 				break;
							}
				}
		}
}
function verificaCantos(){
	cantos = ['','quadro_1','quadro_3','quadro_7', 'quadro_9']
		for ( i=0;i<8;i++ ){
				var x =	Math.floor((Math.random()*4)+1);
				if ( document.getElementById(cantos[x]).innerHTML  == '' ) {
						 return cantos[x];
				}
		}
		return 'false';
}
function random(){
		var x =	Math.floor((Math.random()*9)+1);
		return 'quadro_' + x;
}
function verificandoGanharPerder(interior_quadro){
	var z = interior_quadro;

	if ( (quadro1 == z && quadro2 == z && quadro3 == '') 
		|| (quadro7 == z && quadro5 == z && quadro3 == '') 
		|| (quadro6 == z && quadro9 == z && quadro3 == '')) {
				return 'quadro_3';
	}
	else{
			 if ( (quadro1 == z && quadro3 == z && quadro2 == '') 
				 || (quadro5 == z && quadro8 == z && quadro2 == '')) {
						return 'quadro_2';
			 }
			 else{
						if ( (quadro2 == z && quadro3 == z && quadro1 == '') 
							|| (quadro4 == z && quadro7 == z && quadro1 == '') 
							|| (quadro5 == z && quadro9 == z && quadro1 == '')) {
								 return 'quadro_1';
						}
						else{
								 if ( (quadro1 == z && quadro7 == z && quadro4 == '') 
									 || (quadro5 == z && quadro6 == z && quadro4 == '')) {
										return 'quadro_4';
								 }
								 else{
											if ( (quadro1 == z && quadro9 == z && quadro5 == '') 
												|| (quadro7 == z && quadro3 == z && quadro5 == '')
												|| (quadro2 == z && quadro8 == z && quadro5 == '')
												|| (quadro4 == z && quadro6 == z && quadro5 == '')) { 
														return 'quadro_5';
											}
											else{
													 if ( (quadro3 == z && quadro9 == z && quadro6 == '') 
														 || (quadro4 == z && quadro5 == z && quadro6 == '')) {
																return 'quadro_6';
													 }
													 else{
																if ( (quadro1 == z && quadro4 == z && quadro7 == '') 
																	|| (quadro3 == z && quadro5 == z && quadro7 == '')
																	|| (quadro8 == z && quadro9 == z && quadro7 == '')) {
																			return 'quadro_7';
																}
																else{
																		if ( (quadro2 == z && quadro5 == z && quadro8 == '') 
																			|| (quadro7 == z && quadro9 == z && quadro8 == '')) {
																					return 'quadro_8';
																		}
																		else{
																				if ( (quadro1 == z && quadro5 == z && quadro9 == '') 
																					|| (quadro3 == z && quadro6 == z && quadro9 == '')
																					|| (quadro7 == z && quadro8 == z && quadro9 == '')) {
																							return 'quadro_9';
																				}
																				else{
																						 	if ( quadro2 == z && quadro6 == z ){
																										if ( quadro1 == '' ) {
																												 return 'quadro_1';
																										}
																										if ( quadro9 == '' ) {
																												 return 'quadro_9';
																										}
																								}
																								else{
																										if ( quadro4 == z && quadro8 == z ){
																													if ( quadro1 == '' ) {
																															 return 'quadro_1';
																													}
																													if ( quadro9 == '' ) {
																															 return 'quadro_9';
																													}
																										}
																										else{
																													if ( quadro6 == z && quadro8 == z ){
																																if ( quadro3 == '' ) {
																																		 return 'quadro_3';
																																}
																																if ( quadro7 == '' ) {
																																		 return 'quadro_7';
																																}
																													}
																													else{
																															 if ( quadro2 == z && quadro4 == z ){
																																		if ( quadro3 == '' ) {
																																				 return 'quadro_3';
																																		}
																																		if ( quadro7 == '' ) {
																																				 return 'quadro_7';
																																		}
																																}
																																else{
																																			return 'false';
																																}
																													}
																										}
																								}
																				}
																		}
																}
													 }
											}
								 }
						}
			 }
	}


}

function jogador(){
		clicado = 'você';
}

function gerarNumero(){
	var numero = Math.floor((Math.random()*4)+1);

	if ( numero == 5 ) {
			 numero++;
	}
	return numero;
}

var nomeQuadro = 'quadro_';

function limparcampos(){
	WinVencedor = 'false';
	jogoVencido = false;
	document.getElementById("vencedor").style.visibility="hidden";
	
	// limpando dados de cada quadrado, valores e o background
	for ( var i=1; i<10; i++ ){
				document.getElementById((nomeQuadro + i)).innerHTML = "";
				document.getElementById((nomeQuadro + i)).style.background="black";
	}
	
	if ( iniciando % 2 == 0 ) {
			 jogando_no_quadro(random());
	}
	else{
			 document.getElementById("vencedor").innerHTML = " VOCÊ COMEÇA AGORA! ";
			 document.getElementById("vencedor").style.visibility="visible";
	}

  iniciando++;
	 
}

var jogoVencido = false;

function vencedor(vencedor){
	// concatenando uma fraze para jogar dentro de uma DIV, la no HTML 
	// cujo id é "vencedor"
	document.getElementById('vencedor').innerHTML = clicado.toUpperCase() + " Venceu!";
	document.getElementById("limparcampos").innerHTML= " Novo Jogo ";
	document.getElementById("vencedor").style.visibility="visible";
	
	if ( jogoVencido == false ) {
			 placar(vencedor);
	}
	jogoVencido = true;
}

function placar(vencedor){
				if ( clicado == "computador" ) {
							document.getElementById('O').innerHTML = "COMPUTADOR: <h3>" + (++o) + "</h3>";
				}
				else{
							document.getElementById('X').innerHTML = "VOCÊ: <h3>" + (++x) + "</h3>";
				}
}
function nenhumVencedor(){
	if ( quadro1 != ''
							 && quadro2 != '' 
							 && quadro3 != '' 
							 && quadro4 != '' 
							 && quadro5 != '' 
							 && quadro6 != '' 
							 && quadro7 != ''
							 && quadro8 != ''
							 && quadro9 != '') {
				//escrevendo que ninguem venceu na div
				document.getElementById('vencedor').innerHTML = " Ninguém Venceu !!!";
				document.getElementById("limparcampos").innerHTML= " Novo Jogo ";
				document.getElementById("vencedor").style.visibility="visible";
	}  
}
// =============== FIM ======== jogando contra computador ==================