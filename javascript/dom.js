/*//var ////////////
var titulo = document.getElementsByTagName('h1')[0];
console.log(titulo);

//ID///////////////
var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);

var apresentadormultifacetado = document.getElementById('doll');
console.log(apresentadormultifacetado);

//CLASS/////////////////////////////
var item = document.getElementsByClassName('item')[0];
console.log(item);

var item2 = document.getElementsByClassName('item')[1];
console.log(item2);

var item4 = document.getElementsByClassName('item')[3];
console.log(item4);
*/

///////////queryselector e queryselectorall//////////

var itensclass = document.getElementsByClassName('item');
console.log(itensclass);

var itensquery = document.querySelectorAll('#lista2 li');
console.log(itensquery);//ele seleciona retona todos os itens que estao com este nome 

var lista4 = document.querySelectorAll('#lista4 li');
console.log(lista4);

var lista3 = document.querySelectorAll('#lista3 li');
console.log(lista3);

var testando = document.getElementById('lista');
console.log(testando);

var testando2 =  document.querySelector('#lista2');
console.log(testando2);

var span = document.querySelector('#paragrafo span');
console.log(span);

var notateste = document.querySelectorAll('#pip span')[0];
console.log(notateste);
var doll = document.querySelector('#title');
doll.setAttribute('class', 'doll');
console.log(doll);

console.log(itensclass);