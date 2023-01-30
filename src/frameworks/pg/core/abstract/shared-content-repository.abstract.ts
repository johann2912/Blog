import { IGenericRepository } from "./generic-repository.abstract";

export abstract class ISharedContentRepository<T> extends IGenericRepository<T> {
    public abstract findByUserId(nickname: string): Promise<T>;
    public abstract findOneWithUserInformation(id: string): Promise<T>;
};