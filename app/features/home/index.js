import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';
import HomeController from './home.controller';
import userToDo from './directives/user';

export default angular.module('app.home', [uirouter])
    .config(routing)
    .controller('HomeController', HomeController)
    .directive('userToDo', userToDo)
    .name;