angular
    .module('booksApp')
    .controller('BooksController', function ($scope, $rootScope, $location, BooksManager) {
        $scope.books = [];
        $scope.newBook = {
            title: ''
        };

        $scope.refresh = function () {
            BooksManager.all().then(function (books) {
                $scope.books = books;
            });
        }

        $scope.refresh();

        $scope.addBook = function () {
            BooksManager.add($scope.newBook).then(function (savedBook) {
                $scope.books.push(savedBook);
            });

            $scope.newBook.title = '';

            $location.path('#/books');
        }

        $scope.deleteBook = function (book) {
            BooksManager.delete(book).then(function () {
                $scope.books.splice($scope.books.indexOf(book), 1);
            })
        }
    });
