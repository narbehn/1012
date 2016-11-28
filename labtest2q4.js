function go()
{
  var input = document.getElementById("input");
  var output = document.getElementById("output");
  output.innerHTML = input.innerHTML.replace(/[^aeiou]/gi, "");
}
onload = go;
