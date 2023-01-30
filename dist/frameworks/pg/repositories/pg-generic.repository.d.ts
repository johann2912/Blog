import { Repository } from "typeorm";
import { IGenericRepository } from "../core/abstract/generic-repository.abstract";
export declare class PgGenericRepository<T> implements IGenericRepository<T> {
    _repository: Repository<T>;
    constructor(repository: Repository<T>);
    findAll(): Promise<T[]>;
    findOne(id: string): Promise<T>;
    create(item: T | any): Promise<T>;
    update(id: string, item: T | any): Promise<void>;
    delete(id: string): Promise<void>;
    softdelete(id: string): Promise<void>;
}
