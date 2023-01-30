import { IGenericRepository } from "./generic-repository.abstract";
export declare abstract class ISharedContentRepository<T> extends IGenericRepository<T> {
    abstract findByUserId(nickname: string): Promise<T>;
    abstract findOneWithUserInformation(id: string): Promise<T>;
}
