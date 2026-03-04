(function () {
  'use strict';
  var toggle = document.querySelector('.nav-toggle');
  var links  = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  // Mark active nav link from current path
  var path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href').replace(/^\.\//, '');
    var page = path.split('/').pop() || 'index.html';
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}());
