export default class HomeController{
   constructor($scope,$stateParams)
     {
            this.todos=[];
            this.user=$stateParams.user
            this.userText='';
        }
        addTodo(){
            this.todos.push({
                user: this.user,
                title: this.userText,
                completed: false
            });
        }
        onUser(){
            this.selectedTab='user';
        }
        onAll(){
            this.selectedTab='all';
        }
        remove(todo){
            var i=this.todos.indexOf(todo);
            this.todos.splice(i,1);
        }
     }
 