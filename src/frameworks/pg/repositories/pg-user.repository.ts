import { IUserRepository } from "../core/abstract/user.repository.abstract";
import { PgGenericRepository } from "./pg-generic.repository";

export class PgUserRepository<T> 
    extends PgGenericRepository<T>
    implements IUserRepository<T>
{
    public async findByNickname(nickname: string): Promise<T> {
        return await this._repository.findOne({
            where: {
                nickname
            }
        });
    }
    public async findByEmail(email: string): Promise<T> {
        return await this._repository.findOne({
            where: {
                email
            }
        });
    };

    public async findByDocument(documentNumber: string): Promise<T> {
        return await this._repository.findOne({
            where: {
                documentNumber
            }
        });
    };
    
};