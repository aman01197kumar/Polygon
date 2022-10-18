const click = document.querySelector("#click");
const cn = document.querySelector("canvas");
var ctx = cn.getContext("2d");
cn.width = 500;
cn.height = 300;

click.addEventListener("click", () => {
  var x = 250;
  var y = 120;
  radius = 100;
  var sides = document.getElementById("sides").value;
  if (sides < 3)
    document.getElementById("para").innerHTML = "A polygon has atleast 3 sides";
  else document.getElementById("para").innerHTML = "";
  var a = (Math.PI * 2) / sides;
  //   ctx.moveTo(0, 0);
  //   ctx.lineTo(200, 100);
  ctx.beginPath();
  ctx.translate(x, y);
  ctx.moveTo(radius, 0);
  for (var i = 1; i <= sides; i++) {
    ctx.lineTo(radius * Math.cos(a * i), radius * Math.sin(a * i));
  }
  ctx.translate(-x, -y);
  ctx.clearRect(0, 0, cn.width, cn.height);
  ctx.stroke();
  ctx.fillStyle = generateRandomColor();
  ctx.fill();
  ctx.closePath();
  console.log("hello");

  function generateRandomColor() {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
    //random color will be freshly served
  }
  //   document.body.style.backgroundColor = generateRandomColor(); // -> #e1ac94
  //   someDiv.style.color = generateRandomColor(); // -> #34c7aa
});
