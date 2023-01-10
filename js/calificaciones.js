var a, b, c, d, e, f, g;
a=parseFloat(document.getElementById('pw').value);
b=parseFloat(document.getElementById('cer').value);
c=parseFloat(document.getElementById('gps').value);
d=parseFloat(document.getElementById('la').value);
e=parseFloat(document.getElementById('sp').value);
f=parseFloat(document.getElementById('ti').value);
g=parseFloat(document.getElementById('tebd').value);

Plotly.plot('chart',[{
    x: ['A','B','C', 'D', 'E', 'F', 'G'],
    y: [a , b, c, d, e, f, g],
    type: 'bar'
}]);