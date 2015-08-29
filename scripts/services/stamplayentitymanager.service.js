angular
    .module('booksApp')
    .factory('EntityManager', function ($q, $stamplay) {

        function EntityManager(entityName, options) {
            this.all = function all() {
                var deferred = $q.defer();

                var collection = $stamplay.Cobject(entityName).Collection;

                collection.fetch().then(function () {
                    deferred.resolve(collection.instance);
                });

                return deferred.promise;
            };

            this.add = function add(instance) {
                var deferred = $q.defer();

                var model = $stamplay.Cobject(entityName).Model;

                angular.forEach(instance, function (value, key) {
                    model.set(key, value);
                });

                model.save()
                    .then(function () {
                        deferred.resolve(model);
                    }, function (error) {});

                return deferred.promise;
            }

            this.delete = function deleteFn(instance) {
                var deferred = $q.defer();

                instance.destroy()
                    .then(function () {
                        deferred.resolve(instance);
                    }, function (error) {});

                return deferred.promise;
            }
        }

        return function (entityName, options) {
            return new EntityManager(entityName, options);
        };

    });
