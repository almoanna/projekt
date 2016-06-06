import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';
import HomeController from './home.controller';
import userInput from './directives/user_input';

export default angular.module('app.home',[uirouter])
    .config(routing)
    .controller('HomeController',HomeController)
    .directive('userInput', userInput)
    .name; 