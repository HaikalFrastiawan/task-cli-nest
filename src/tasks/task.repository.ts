import { readFile, writeFile } from "fs/promises";

export class TaskRepository {
    async findAll(): Promise<any[]> {
        const data = await readFile('tasks.json', 'utf-8');
        return JSON.parse(data);
    }

    async findOne(id: number) {
        const data = await readFile('tasks.json', 'utf-8');
        const tasks = JSON.parse(data);

        return tasks.find((task: any) => task.id === id);
    }

    async create(content: string) {
        const data = await readFile('tasks.json', 'utf-8');
        const tasks = JSON.parse(data);

        const newTask = {
            id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
            content,
        };

        tasks.push(newTask);

        await writeFile('tasks.json', JSON.stringify(tasks, null, 2), 'utf-8');

        return newTask; // 
    }
}
