Stamplay.init('brunom');

angular
    .module('booksApp', ['ngStamplay', 'ngMaterial', 'ngRoute', 'ngMessages'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/books', {
                    templateUrl: 'views/books/books.html',
                    controller: 'BooksController'
                })
                .when('/newbook', {
                    templateUrl: 'views/books/newbook.html',
                    controller: 'BooksController'
                })
                .otherwise({
                    redirectTo: '/books'
                });
  }]);
