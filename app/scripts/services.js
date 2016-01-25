'use strict';

angular.module('confusionApp')
    .constant("baseURL", "http://localhost:3000/")
    .service('menuFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        this.getDishes = function () {
            return $resource(baseURL + 'dishes/:id', null, {"update": {method: 'PUT'}});

        };

        this.getPromotion = function () {
            return $resource(baseURL + 'promotions/:id', null, {"update": {method: 'PUT'}});
        };
    }])

    .factory('corporateFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        var corporateFactory = {};

        corporateFactory.getLeaders = function () {
            return $resource(baseURL + 'leadership/:id', null, {"update": {method: 'PUT'}});
        };

        return corporateFactory;

    }])
    .factory('feedbackFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        var feedbackFactory = {};

        feedbackFactory.getFeedbacks = function () {
            return $resource(baseURL + 'feedback/:id', null, {"save": {method: 'POST'}});
        };

        return feedbackFactory;

    }]);