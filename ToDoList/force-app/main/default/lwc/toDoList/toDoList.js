import { LightningElement, track,wire } from 'lwc';
import getAllTodos from '@salesforce/apex/ToDoController.getAllTodos';
export default class ToDoList extends LightningElement {
    @track todos=[];

  
@wire(getAllTodos)
getAllRecord({ data, error }){
    if(data){
        console.log("HERE IS TODOS",data);
        this.groupToDoData(data);
    }else{
        console.error("No Record found");
  
    }

}
groupToDoData(todos){
    if(todos){
        const todoWrap = new Map();
        todos.forEach(todo => {
            if(!todoWrap.has(todo.todoDate)){
                todoWrap.set(todo.todoDate,[]);
                console.log("checking date array[]==",todoWrap);
            }
            todoWrap.get(todo.todoDate).push(todo);
        });
        const todoList= [];
        for(let key of todoWrap.keys()){
            console.log("HERE CHECKING FUNCTION", todoWrap.get(key));
            const todoItem = {date: key, items : todoWrap.get(key)};
            console.log("ITEM",todoItem);
            todoList.push(todoItem);
        }
        this.todos = todoList;
    }
}


}