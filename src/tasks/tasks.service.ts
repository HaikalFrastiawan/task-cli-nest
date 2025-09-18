import { Injectable } from "@nestjs/common";
import { TaskRepository } from "./task.repository";

@Injectable()
export class TasksService {
  constructor(private readonly taskRepo: TaskRepository) {}

  findAll() {
    return this.taskRepo.findAll();
  }

  findOne(id: number) {
    return this.taskRepo.findOne(id);
  }

  create(task: string) {
    return this.taskRepo.create(task);
  }
}
