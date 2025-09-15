import { Controller, Get , Post } from '@nestjs/common';

@Controller('task')
export class TasksController {
    @Get()
    listTask(){}

    @Post()
    createTask(){}

    @Get('/:id')
    getTask(){}

}
