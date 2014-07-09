function IndexCtrl($scope, $http){

};

function FamilyCtrl($scope, $http, $routeParams, $location){
  $http.get('/api/families/' + $routeParams.id).
    success(function(data){
      $scope.family = data;
    });
  $http.get('/api/families/' + $routeParams.id + '/members').
    success(function(data){
      $scope.family.members = data;
  });
  $scope.edit = function () {
    $location.url('/families/' + $routeParams.id + '/edit');
  };
  $scope.delete = function() {
    $location.url('/families/' + $routeParams.id + '/delete')
  }
};

function FamiliesCtrl($scope, $http){
  $http.get('/api/families').
    success(function(data){
      $scope.families = data;
    })
};

function FamilyAddCtrl($scope, $http, $location){
  $scope.form = {};

  $scope.addFamily = function(){
    $http.post('/api/families',$scope.form).
    success(function(data){
      $location.url('/families');
    })
  }
};

function FamilyEditCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/api/families/' + $routeParams.id).
    success(function(data) {
      $scope.form = data;
    });

  $scope.editFamily = function () {
    $http.put('/api/families/' + $scope.form.id, $scope.form).
      success(function(data) {
        $location.url('/families/' + $routeParams.id);
      });
  };
};

function FamilyDeleteCtrl($scope, $http, $location, $routeParams) {
  $http.get('/api/families/' + $routeParams.id).
    success(function(data) {
      $scope.family = data;
    });

  $scope.deleteFamily = function () {
    $http.delete('/api/families/' + $scope.form.id).
      success(function(data) {
        console.log(data);
        $location.url('/families');
      });
  };

  $scope.home = function () {
    $location.url('/families');
  };
}




function CharacterCtrl($scope, $http, $routeParams, $location){
  $http.get('/api/persons/' + $routeParams.id).
    success(function(data){
      $scope.character = data;
    })
  $scope.edit = function () {
    $location.url('/characters/' + $routeParams.id + '/edit');
  };
  $scope.delete = function() {
    $location.url('/characters/' + $routeParams.id + '/delete')
  }
};

function CharactersCtrl($scope, $http){
  $http.get('/api/persons').
    success(function(data){
      $scope.characters = data;
    })
};

function CharacterAddCtrl($scope, $http, $location){
  $scope.form = {};

  $scope.addCharacter = function(){
    $scope.form.fullname = $scope.form.name + ' ' + $scope.form.surname;
    $http.post('/api/persons',$scope.form).
    success(function(data){
      $location.url('/characters');
    })
  }
};

function CharacterEditCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/api/persons/' + $routeParams.id).
    success(function(data) {
      $scope.form = data;
    });

  $scope.editCharacter = function () {
    $http.put('/api/persons/' + $routeParams.id, $scope.form).
      success(function(data) {
        $location.url('/characters/' + $routeParams.id);
      });
  };
};

function CharacterDeleteCtrl($scope, $http, $location, $routeParams) {
  $http.get('/api/persons/' + $routeParams.id).
    success(function(data) {
      $scope.form = data;
    });

  $scope.deleteCharacter = function () {
    $http.delete('/api/persons/' + $routeParams.id).
      success(function(data) {
        console.log(data);
        $location.url('/characters');
      });
  };

  $scope.home = function () {
    $location.url('/characters');
  };
}