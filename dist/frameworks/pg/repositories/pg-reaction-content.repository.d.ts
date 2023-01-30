import { IReactionContentRepository } from "../core/abstract/reaction-content-repository.abstract";
import { PgGenericRepository } from "./pg-generic.repository";
export declare class PgReactionContentRepository<T> extends PgGenericRepository<T> implements IReactionContentRepository<T> {
    findReactionsWithUserInformation(): Promise<T[]>;
    findOneWithUserInformation(contentReactionId: string): Promise<T>;
}
