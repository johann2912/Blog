import { IGenericRepository } from "./generic-repository.abstract";
export declare abstract class IReactionContentRepository<T> extends IGenericRepository<T> {
    abstract findOneWithUserInformation(id: string): Promise<T>;
    abstract findReactionsWithUserInformation(): Promise<T[]>;
}
