app.controller('contentCtrl', ['$scope', function($scope) { 
  $scope.artists = [ 
    { 
      name: 'Taeyeon Kim', 
      group: 'SNSD', 
      img_small: 'img/taeyeon_small.jpeg',
      img_large: 'img/taeyeon_main.jpg',
      birthday: '03/09/1989',
      company: 'SM Entertainment',
      debut_year: '2007'
    }, 
    { 
      name: 'Solar', 
      group: 'Mamamoo', 
      img_small: 'img/solar_small.jpeg',
      img_large: 'img/solar_main.jpg',
      birthday: '02/21/1991',
      company: 'HOW Entertainment',
      debut_year: '2014'
    }, 
    { 
      name: 'Yuju', 
      group: 'Gfriend', 
      img_small: 'img/yuju_small.jpg',
      img_large: 'img/yuju_main.jpg',
      birthday: '10/04/1997',
      company: 'Source Music',
      debut_year: '2015'
    }
  ];
}]);