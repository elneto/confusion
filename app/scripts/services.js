'use strict';

angular.module('confusionApp')
        .constant('baseURL', "http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {
                    
                this.getDishes = function(){
                    
                    //return $http.get(baseURL+"dishes");
                    return $resource(baseURL+"dishes/:id", null, {'update':{method:'PUT'}});
                    
                };
    
                // implement a function named getPromotion
                // that returns a selected promotion.
                this.getPromotions = function () {
                    //return promotions[index];
                    return $resource(baseURL+"promotions/:id", null, {'update':{method:'PUT'}});
                };
    
                        
        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
            var corpfac = {};
     
            // Implement two functions, one named getLeaders,
            corpfac.getLeaders = function(){
                    return $resource(baseURL+"leadership/:id", null, {'update':{method:'PUT'}});
                };
    
            // Remember this is a factory not a service
            return corpfac;
    
        }])

        .factory('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
            var feedfac = {};
     
            // Implement two functions, one named getLeaders,
            feedfac.getFeedback = function(){
                    return $resource(baseURL+"feedback/:id", null);
                };
    
            // Remember this is a factory not a service
            return feedfac;
    
        }])

;
