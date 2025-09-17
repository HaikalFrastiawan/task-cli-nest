import {  readFile, writeFile } from "fs";

export class TaskRepository {
    async findAll(): Promise<any> {}
    async findOne(id: number) {
        const data = await readFile('tasks.json', 'utf-8');
        const tasks = JSON.parse(data);

        return tasks.find((task: any) => task.id);
    }

    async create(task: string) {}
}