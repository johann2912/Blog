import { SharedContent, ReactionContent, User } from "../../entities";
import { IReactionContentRepository } from "./reaction-content-repository.abstract";
import { ISharedContentRepository } from "./shared-content-repository.abstract";
import { IUserRepository } from "./user.repository.abstract";

export abstract class IDatabaseAbstract {
    public abstract readonly users: IUserRepository<User>;
    public abstract readonly reactionsContent: IReactionContentRepository<ReactionContent>;
    public abstract readonly sharedContent: ISharedContentRepository<SharedContent>;
};