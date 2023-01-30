import { IUserRepository } from "../core/abstract/user.repository.abstract";
import { PgGenericRepository } from "./pg-generic.repository";
export declare class PgUserRepository<T> extends PgGenericRepository<T> implements IUserRepository<T> {
    findByNickname(nickname: string): Promise<T>;
    findByEmail(email: string): Promise<T>;
    findByDocument(documentNumber: string): Promise<T>;
}
