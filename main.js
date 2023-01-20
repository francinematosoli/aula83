//removido var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;
color = "black";
widthOfLine = 2;//mudado

canvas = document.getElementById('myCanvas');//mantido
ctx = canvas.getContext("2d");//mantido

var width = screen.width;//adicionado

newWidth =  screen.width - 70; //adicionado
newHeight = screen.height - 300;//adicionado
	
if(width < 992)//adicionado
	{
	document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
	}
	canvas.addEventListener("touchstart", myTouchStart);//alterado

function myTouchStart(e) //alterado mousedown para touchstart
{
	console.log("myTouchStart");
 //Início da Atividade Adicional
  color = document.getElementById("color").value;
  widthOfLine = document.getElementById("widthOfLine").value;
  
//Fim da Atividade Adicional
    //alterado ,acrescentado,touches[o]
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}
// alterar mousemove por touchmove
canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove(e) 
{

	console.log("myTouchMove");
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
    //apagar if linha 26 e 39, o meio permanece
    // mesmo código utilizado para a versão web
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;

    console.log("Última posição das coordenadas x e y = ");
    console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
    ctx.moveTo(lastPositionOfX, lastPositionOfY);

    console.log("Posição atual das coordenadas x e y = ");
    console.log("x  = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    lastPositionOfX = currentPositionOfTouchX; ;//alterado
    lastPositionOfY = currentPositionOfTouchY;//alterado
    
    // fim do mesmo código utilizado para a versão web
}

    // mesmo código utilizado para a versão web
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    // fim do mesmo código utilizado para a versão web
