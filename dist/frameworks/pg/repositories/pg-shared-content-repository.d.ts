import { ISharedContentRepository } from "../core/abstract/shared-content-repository.abstract";
import { PgGenericRepository } from "./pg-generic.repository";
export declare class PgUserRepository<T> extends PgGenericRepository<T> implements ISharedContentRepository<T> {
}
