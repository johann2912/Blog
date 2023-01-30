import { IGenericRepository } from "./generic-repository.abstract";
export declare abstract class IUserRepository<T> extends IGenericRepository<T> {
    abstract findByEmail(email: string): Promise<T>;
    abstract findByDocument(documentNumber: string): Promise<T>;
    abstract findByNickname(nickname: string): Promise<T>;
}
