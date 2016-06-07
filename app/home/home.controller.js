export default class HomeController{
    constructor($scope,$stateParams){
     this.todos = [];
     this.user = $stateParams.user
     this.userText = '';
    }
    addTodo(){
     this.todos.push({
    value:{
        user: this.user,
        title: this.userText,
        completed:false
        },
    editing: false
    });
  }
    onuser(){
     this.selectedTab = 'user';
    }
    onall(){
       this.selectedTab = 'all';
    }
    removeTodo(toDo){
     var i = this.todos.indexOf(toDo);
     this.todos.splice(i,1);
     }
     editTodo(todo){
        todo.editing = !todo.editing;
        this.originalToDo = todo;
    }
    doneEditing(todo){
        todo.editing = !todo.editing;
    }
    } 