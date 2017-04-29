var select = document.querySelector('.parcourir');
var nav = document.querySelector('.menu-hover');
var cat60 = document.querySelector('.decennie60');
var cat70 = document.querySelector('.decennie70');
var cat80 = document.querySelector('.decennie80');
var annees80 = document.querySelector('.annee80');
var annee70 = document.querySelector('.annee70');
var annee60 = document.querySelector('.annee60');


  select.addEventListener('mouseover', function() {
  	nav.style.display = 'block';

      annees80.addEventListener('mouseover', function() {
      cat70.style.display = 'none';
      cat80.style.display = 'block';
      cat60.style.display = 'none';
      });

      annee70.addEventListener('mouseover', function(){
      	cat80.style.display = 'none';
      	cat70.style.display = 'block';
      	cat60.style.display = 'none';
      });

      annee60.addEventListener('mouseover', function(){
      	cat60.style.display = 'block';
      	cat80.style.display = 'none';
      	cat70.style.display = 'none';
      });

 });

  document.addEventListener('click', function() {
  	nav.style.display = 'none';
  });
