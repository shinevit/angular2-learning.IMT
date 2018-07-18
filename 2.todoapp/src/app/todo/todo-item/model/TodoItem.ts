import { TodoStateEnum as TodoState} from './TodoStateEnum';

export class TodoItem {

  id: number;
  description: string;
  status: TodoState = TodoState.New;

  constructor(description: string) {
    this.description = description;
    this.id = 1;
  }


  toString(): string {
    return `TodoItem: {id=${this.id}, description: ${this.description}, status:${this.status as number}}`;
  }
}
