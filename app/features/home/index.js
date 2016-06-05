import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';
import HomeController from './home.controller';
import userToDo from './directives/user';
import toDouser from './directives/user_toDo';
import all_ToDo from './directives/all_toDo';



export default angular.module('app.home', [uirouter])
    .config(routing)
    .controller('HomeController', HomeController)
    .directive('userToDo', userToDo)
    .directive('toDouser', toDouser)
    .directive('all_ToDo', all_ToDo)
    .name;