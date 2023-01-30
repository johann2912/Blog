export interface IUser {
    id?: string
    createAt?: Date;
    updateAt?: Date;
    deleteAt?: Date;
    full_name?: string;
    nickname?: string;
    documentType?: number;
    documentNumber?: string;
    email?: string;
    password?: string;
};