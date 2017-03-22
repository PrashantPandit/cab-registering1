angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })

    .when('/booking', {
        templateUrl: 'views/booking.html',
        controller: 'BookingController'
    })

    .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController'
    })
    .when('/location',{
      templateUrl: 'views/location.html',
      controller: 'LocationController'
    })
    .when('/user-register', {
      templateUrl: 'views/user-register.html',
      controller: 'AdminController'
    })
    .when('/book-cab', {
      templateUrl: 'views/book-cab.html',
      controller: 'AdminController'
    })
    .when('/estimate-details', {
      templateUrl: 'views/estimate-details.html'
    });


    $locationProvider.html5Mode(true);

}]);
