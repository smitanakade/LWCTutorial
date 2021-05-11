import { LightningElement,track } from 'lwc';
import addTodo from "@salesforce/apex/ToDoController.addTodo";
import getCurrentTodos from "@salesforce/apex/ToDoController.getCurrentTodos";
export default class ToDoManager extends LightningElement {
    time="8:15Pm";
    greeting="Good Evening";
    @track todos=[];
    connectedCallback(){
        this.getTime();
        this.fetchTodos();
        setInterval(()=>{
            this.getTime();
               }, 1000*60);
    }

    getTime(){
        const date= new Date();
        const hour= date.getHours();
        const min= date.getMinutes();

        this.time = `${this.getHour(hour)}: ${this.getDoubleDigit(min)} ${this.getMidDay(hour)}`;
        
        this.setGreeting(hour);
    }
    getHour(hour){
        return hour == 0 ? 12 :hour > 12 ? (hour-12) : hour;
    }
    getMidDay(hour){
        return hour >=12 ? "PM" : "AM";
    }

    getDoubleDigit(digit){
        return digit < 10 ? "0"+digit : digit;
    }

    setGreeting(hour){
        if(hour < 12){
            this.greeting="Good Morning";
        } else if(hour>= 12 && hour< 17){
            this.greeting = "Good Afternoon";
        } else if(hour > 21){
            this.greeting="Good Evening";
        }

    }

    fetchTodos(){
        getCurrentTodos().then(result=>{
            if(result){
            console.log("From Sever", result.length);
            this.todos= result;
            }
        }).catch(error =>{
            console.error('Error in inserting todo item'+error);
        });
    }
    addTodoHandler(){
        const inputbox = this.template.querySelector("lightning-input");
        const todo={
            todoName:inputbox.value,
            done: false
        };
        addTodo({payload: JSON.stringify(todo)}).then(Response =>{
            console.log("Item inserted Succesfully");
            this.fetchTodos();
        }).catch(error => {
            console.error('Error in inserting todo item'+error);
        })
        this.todos.push(todo);
        inputbox.value="";
    }
    updateHandler(){
        this.fetchTodos();
    }
    deleteHandler(){
        this.fetchTodos();
    }
    get upcomingTasks(){
        return this.todos && this.todos.length ? this.todos.filter(todo=> !todo.done) : [];
    }
    get completedTasks(){
        return this.todos && this.todos.length ? this.todos.filter(todo=> todo.done) : [];
    }
    
}