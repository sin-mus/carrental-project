export interface Tasks{
    type: string;
    getTasks(): string[];
}
export class AdminstrationTasks implements Tasks {
    type: string = "administration";
    getTasks() {
        return ['Administration', 'Administration', 'Administration', 'Administration', 'Administration'];
    }
}
export class MechanicsTasks implements Tasks {
    type: string = "mechanics";
    getTasks() {
        return ['Mechanics', 'Mechanics', 'Mechanics', 'Mechanics', 'Mechanics'];
    }
}
export class OtherTasks implements Tasks {
    type: string = "other";
    getTasks():string[] {
        return ['Other', 'Other', 'Other', 'Other', 'Other'];
    }
}