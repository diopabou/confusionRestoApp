'use strict';
angular.module('conFusionApp')

.controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory){
$scope.dishes = menuFactory.getDishes();
$scope.tab = 1;
$scope.filtText = "";
$scope.select = function(setTab){
    $scope.tab = setTab;
    if(setTab === 2){
      $scope.filtText = 'appetizer';
    }else if (setTab === 3) {
       $scope.filtText = 'mains';
     }else if (setTab === 4){
       $scope.filtText = 'dessert';
     }else {
       $scope.filtText = "";
     }
};

$scope.isSelected = function(checkTab){
  return ($scope.tab === checkTab);
};

$scope.showDetails = true;
$scope.toggleDetails = function(){
  $scope.showDetails = !$scope.showDetails;
};


}]
)
.controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory){
      $scope.dishIndex = menuFactory.getDish(0);

      $scope.promotion = menuFactory.getPromotion(0);

      $scope.chiefExecutive = corporateFactory.getLeader(3);
}]
)
.controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory){
    $scope.leadership = corporateFactory.getLeaders();
}]
)
.controller('DishDetailController', ['$scope', 'menuFactory', '$stateParams', function($scope, menuFactory, $stateParams){
  $scope.dish = menuFactory.getDish(parseInt($stateParams.id, 10));
}]
)
.controller("ContactController", ['$scope', function($scope){
  $scope.feedback = {
    myChannel: "",
    firstName: "",
    lastName: "",
    email: "",
    agree: false,
  };

  $scope.channels = [
    {value: 'tel', label: 'Tel'},
    {value: 'Email', label: 'Email'}
  ];
  $scope.invalidChannelSelection = false;

}]
)
.controller("FeedbackController", ['$scope', function($scope){
  $scope.sendFeedback = function(){
    console.log($scope.feedback);
    if($scope.feedback.agree && ($scope.feedback.myChannel == "")){
      $scope.invalidChannelSelection = true;
      console.log("Incorrect");
    }else{
      $scope.invalidChannelSelection = false;
      $scope.feedback = {
        myChannel: "",
        firstName: "",
        lastName: "",
        agree: false,
        email: ""
      };
      $scope.feedback.myChannel = "";
      $scope.feedbackForm.$setPristine();
      console.log($scope.feedback);
    }
  }
}])
.controller('DishCommentController', ['$scope', function($scope) {

    //Step 1: Create a JavaScript object to hold the comment from the form
    $scope.myComment= {
      rating: 5,
      author: "",
      comment:""
    };
   $scope.submitComment = function () {

  //Step 2: This is how you record the date
        $scope.myComment.date = new Date().toISOString();
  console.log($scope.myComment);
  // Step 3: Push your comment into the dish's comment array
        $scope.dish.comments.push($scope.myComment);

  //Step 4: reset your form to pristine
  $scope.commentForm.$setPristine();

  //Step 5: reset your JavaScript object that holds your comment
  $scope.myComment= {
    rating: 5,
    author: "",
    comment:""
  };
      }

    }])
;
