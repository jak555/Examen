angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
$http.get("http://localhost:8080/Examen/clientes.php")
.success(function(response) {$scope.names = response.records;}); 
    console.log($scope.names);
    $http.get("http://localhost:8080/Examen/productos.php")
.success(function(response) {$scope.productos = response.records;}); 
    console.log($scope.productos);
  // Form data for the login modal
  $scope.loginData = {};
    $scope.productData = {};
    $scope.userData = {};
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/nuevo.html', {
    id: '1',
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });


$ionicModal.fromTemplateUrl('templates/nprod.html', {
    id: '2',
    scope: $scope
  }).then(function(modal) {
    $scope.modal1 = modal;
  });
  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
$scope.closeLogin1 = function() {
    $scope.modal1.hide();
  };
  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  $scope.login1 = function() {
    $scope.modal1.show();
  };
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData.telefono);

        $http.get("http://localhost:8080/Examen/addcliente.php?"+'nombre='+$scope.loginData.nombre+'&'+'direccion='+$scope.loginData.direccion+'&'+'telefono='+$scope.loginData.telefono+'&'+'correo='+$scope.loginData.correo ).success(function(response) {alert("Registro guardado");
        $http.get("http://localhost:8080/servicios/clientes.php")
            .success(function(response) {$scope.names = response.records;
                                         alert("Registros cargados TRES");});
                                         });
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
      doRefresh();
    $scope.modal.hide();
  };
    $scope.doLogin1 = function() {
    console.log('Doing login', $scope.loginData.telefono);

        $http.get("http://localhost:8080/Examen/addproducto.php?"+'nombre='+$scope.productData.nombre+'&'+'descripcion='+$scope.productData.descripcion+'&'+'precio='+$scope.productData.precio ).success(function(response) {alert("Registro guardado");
        $http.get("http://localhost:8080/servicios/productos.php")
            .success(function(response) {$scope.productos = response.records;
                                         console.log("Registros cargados TRES");});
                                         });
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
        doRefresh1();
    $scope.modal1.hide();
  };
$scope.doRefresh = function() {
$http.get("http://localhost:8080/Examen/clientes.php")
.success(function(response) {$scope.names = response.records;
console.log("Registros cargados DOS");})
.finally(function() {
// Stop the ion-refresher from spinning
$scope.$broadcast('scroll.refreshComplete');
});
};
$scope.doRefresh1 = function() {
$http.get("http://localhost:8080/Examen/productos.php")
.success(function(response) {$scope.productos = response.records;
console.log("Registros cargados DOS");})
.finally(function() {
// Stop the ion-refresher from spinning
$sope.$broadcast('scroll.refreshComplete');
});
}
    $scope.eliminarC = function(id){
    $http.get("http://localhost:8080/Examen/delcliente.php?id="+id)
            .success();
        console.log(id);
        doRefresh();
    }
    $scope.eliminarP = function(id){
    $http.get("http://localhost:8080/Examen/delproducto.php?id="+id)
            .success();
        console.log(id);
        doRefresh1();
    };
    
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Clientes', id: 1 },
    { title: 'Productos', id: 2 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
