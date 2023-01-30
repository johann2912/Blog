import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IReactionContentRepository<T> extends IGenericRepository<T> {
    public abstract findOneWithUserInformation(id: string): Promise<T>;
    public abstract findReactionsWithUserInformation(): Promise<T[]>;
};