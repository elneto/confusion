'use strict';

angular.module('confusionApp',[])
		.controller('MenuController', ['$scope',function($scope){

			$scope.tab = 1;
			$scope.filtText = '';
			$scope.showDetails = false;

			$scope.dishes=[
					{
						name:'Uthapizza',
						image: 'images/uthapizza.png',
						category: 'mains',
						label:'Hot',
						price:'4.99',
						description:'Short loin jerky venison, shank ball tip sausage tail meatball chicken salami meatloaf. Hamburger leberkas turkey venison ground round pork belly pastrami pork picanha pork loin chicken biltong.',
						comment:''
					},
					{
						name:'Zucchipakoda',
                  image: 'images/zucchipakoda.png',
                  category: 'appetizer',
                  label:'',
                  price:'1.99',
                  description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                  comment: ''
					},
					{
						name:'Vadonut',
                  image: 'images/vadonut.png',
                  category: 'appetizer',
                  label:'New',
                  price:'1.99',
                  description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                  comment: ''
					},
					{
                  name:'ElaiCheese Cake',
                  image: 'images/elaicheesecake.png',
                  category: 'dessert',
                  label:'',
                  price:'2.99',
                  description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                  comment: ''
               }
					];

			$scope.select = function(setTab){
				$scope.tab = setTab;

				switch(setTab){
					case 2:
						$scope.filtText = "appetizer";
						break;
					case 3:
						$scope.filtText = "mains";
						break;
					case 4:
						$scope.filtText = "dessert";
						break;
					default:
						$scope.filtText = "";
				}

			};

			$scope.isSelected = function(val){
				return ($scope.tab === val);
			};

			$scope.toggleDetails = function(){
				$scope.showDetails = !$scope.showDetails;
			};
		}]);
