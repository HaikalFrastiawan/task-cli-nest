import { Controller, Get, Post, Body,Param, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dtos/createTask.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    taskService: TasksService;

    constructor(public tasksService: TasksService){
    }

    @Get()
    listTask(){
        return this.tasksService.findAll();
    }

    @Post()
    createTask(@Body() body: CreateTaskDto) {
        return this.tasksService.create(body.content);
    }

    @Get('/:id')
    async getTask(@Param('id') id: string) {
        const task = await this.tasksService.findOne(parseInt(id));

        if (!task){
            throw new NotFoundException('Task Not Found')
        }
    }

    
    

}
