import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';
import HomeController from './home.controller';
import user_in from './directives/user_input'
import user_toDo from './directives/user_toDo';
import all_toDo from './directives/all'
export default angular.module('app.home',[uirouter])
    .config(routing)
    .controller('homeController',HomeController)
    .directive('user_in',user_in)
    .directive('user_toDo', user_toDo)
    .directive('all_toDo', all_toDo)
    .name; 