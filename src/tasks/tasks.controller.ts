import { Controller, Get, Post, Body,Param } from '@nestjs/common';
import { CreateTaskDto } from './dtos/createTask.dto';

@Controller('tasks')
export class TasksController {
    @Get()
    listTask(){
        return 'this all task home';
    }

    @Post()
    createTask(@Body() body: CreateTaskDto) {
        return body;
    }

    @Get('/:id')
    getTask(@Param('id') id: string) {
        return `this task by id : ${id}`
    }

    
    

}
