import { Injectable } from "@nestjs/common";


@Injectable()
export class ApiProductService {
    constructor() {}

    public getServiceName() {
        return ApiProductService.name
    }
}