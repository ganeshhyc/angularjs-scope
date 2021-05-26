var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
    $scope.reset = ()=>{
        $scope.player_1_score = 0;
        $scope.player_2_score = 0;
        $scope.pFlag = false;
    }
    $scope.add_player1 = ()=>{
        if($scope.player_1_score>=4){
            $scope.player_1_score++;
            $scope.pFlag = true;
        }else{
            $scope.player_1_score++;
        }
    }
    $scope.add_player2 = ()=>{
        if($scope.player_2_score>=4){
            $scope.player_2_score++;
            $scope.pFlag = true;
        }else{
            $scope.player_2_score++;
        }
    }
    $scope.reset();
    
});