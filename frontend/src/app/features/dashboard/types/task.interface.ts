export interface Task{
    type: string;
    name: string;
    updateTask(editedTask: Task): void;
}
export class AdministrationTask implements Task {
    name: string;
    type: string = "administration";
    constructor(name: string){
        this.name = name;
    }
    updateTask(editedTask: Task): void{
        
    }
}
export class MechanicsTask implements Task {
    name: string;
    type: string = "mechanics";
    constructor(name: string){
        this.name = name;
    }
    updateTask(editedTask: Task): void{
        
    }
}
export class OtherTask implements Task {
    name: string;
    type: string = "other";
    constructor(name: string){
        this.name = name;
    }
    updateTask(editedTask: Task): void{
        
    }
}