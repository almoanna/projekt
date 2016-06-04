export default function routing($urlRouterProvide, $locationProvider){
    $locationProvider.html15Mode(false);
    $urlRouterProvide.otherwise('/');
}