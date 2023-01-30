import { OnApplicationBootstrap } from "@nestjs/common";
import { Repository } from "typeorm";
import { IDatabaseAbstract } from "./core/abstract/database.abstract";
import { IUserRepository } from "./core/abstract/user.repository.abstract";
import { ReactionContent, SharedContent, User } from "./entities";
import { ISharedContentRepository } from "./core/abstract/shared-content-repository.abstract";
import { IReactionContentRepository } from "./core/abstract/reaction-content-repository.abstract";
export declare class PgDatabaseService implements IDatabaseAbstract, OnApplicationBootstrap {
    private readonly userRepository;
    private readonly sharedContentRepository;
    private readonly reactionContentRepository;
    users: IUserRepository<User>;
    sharedContent: ISharedContentRepository<SharedContent>;
    reactionsContent: IReactionContentRepository<ReactionContent>;
    constructor(userRepository: Repository<User>, sharedContentRepository: Repository<SharedContent>, reactionContentRepository: Repository<ReactionContent>);
    onApplicationBootstrap(): void;
}
