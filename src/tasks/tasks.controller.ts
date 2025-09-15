import { Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    @Get()
    listTask(){
        return 'this all task home'
    }

    @Post()
    createTask(){}

    @Get('/:id')
    getTask(){}

}
