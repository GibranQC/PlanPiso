registrationModule.controller('mainController', function ($scope, $rootScope, $location, localStorageService,alertFactory) {

	$rootScope.userData = localStorageService.get('userData');

	$scope.init = function(){
		$rootScope.mostrarMenu = 1;
		/*if($rootScope.userData == null){
			$rootScope.mostrarMenu = 0;
			alertFactory.warning('Inicie Sesión')
		}else{
			alertFactory.success('Bienvenido '+ $rootScope.userData.nombreUsuario)
			$rootScope.mostrarMenu = 1;
		}*/
	}
	// ************** Función para cerrar sesión
	// ************** NOTA se limpian todos los localStorage utilizados
	 $scope.salir = function(){
	 	alertFactory.warning('Hasta luego '+ $rootScope.userData.nombreUsuario)
        localStorageService.clearAll('userData');
        localStorageService.clearAll('datosEmpresa');
        location.href = '/';
    }
});