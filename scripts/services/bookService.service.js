angular
    .module('booksApp')
    .service('BooksManager', ['EntityManager', function (EntityManager) {
        return EntityManager('book');
    }]);
