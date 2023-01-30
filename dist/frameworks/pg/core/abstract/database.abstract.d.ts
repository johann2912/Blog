import { SharedContent, ReactionContent, User } from "../../entities";
import { IReactionContentRepository } from "./reaction-content-repository.abstract";
import { ISharedContentRepository } from "./shared-content-repository.abstract";
import { IUserRepository } from "./user.repository.abstract";
export declare abstract class IDatabaseAbstract {
    abstract readonly users: IUserRepository<User>;
    abstract readonly company: IReactionContentRepository<ReactionContent>;
    abstract readonly products: ISharedContentRepository<SharedContent>;
}
