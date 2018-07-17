import { TodoStateEnum as TodoState} from './TodoStateEnum';

export class TodoItem {

  id: number;
  description: string;
  status: TodoState = TodoState.New;


  get toString(): string {
    return `TodoItem: id=${this.id}, description: ${this.description}, status:{${this.status.toString} (${this.status as number})}`;
  }
}
