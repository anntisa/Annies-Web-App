myAppControllers.controller('ResumeController', ['$scope',
	function($scope) {
		$scope.pageTitle = "My Career";
        $scope.skills= ["skill1", "skill2"];

        $scope.addSkill = function(skill){
            $scope.skills.push(skill);

        }
}]);