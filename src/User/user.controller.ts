import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./DTO/create-user.dto";

@Controller('users')
export class UserController {

    @Post()
    async create(@Body() {nome, email, password}: CreateUserDto) {
        return {nome, email, password};
    }

    @Get()
    async read() {
        return {users: [{user : "teste", email: "paulo.bolsanello"}]}
    }

    @Get(':id')
    async readOne(@Param() param) {
        return {user : "teste", email: "paulo.bolsanello"}
    }

    @Put(':id')
    async update(@Body() body, @Param() param) {
        return {
            method: "PUT",
            body,
            param
        };
    }

    @Patch()
    async updatePartial(@Body() body, @Param() param) {
        return {
            method: "PATCH",
            body,
            param
        };
    }

    @Delete(':id')
    async delete(@Param() param) {
        return {
            method: "DELETE",
            param
        };
    }

    




}