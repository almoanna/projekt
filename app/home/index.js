import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';
import HomeController from './home.controller';
import userInput from './directives/user_input';
import userToDo from './directives/user_toDo';
import allToDo from './directives/all_toDo';
export default angular.module('app.home',[uirouter])
    .config(routing)
    .controller('HomeController',HomeController)
    .directive('userInput', userInput)
    .directive('allToDo', allToDo)
    .directive('userToDo', userToDo)
    .name; 