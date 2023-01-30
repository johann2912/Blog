import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IDatabaseAbstract } from "./core/abstract/database.abstract";
import { IUserRepository } from "./core/abstract/user.repository.abstract"
import { ReactionContent, SharedContent, User } from "./entities";
import { PgUserRepository } from "./repositories/pg-user.repository";
import { ISharedContentRepository } from "./core/abstract/shared-content-repository.abstract";
import { IReactionContentRepository } from "./core/abstract/reaction-content-repository.abstract";
import { PgSharedContentRepository } from "./repositories/pg-shared-content-repository";
import { PgReactionContentRepository } from "./repositories/pg-reaction-content.repository";


@Injectable()
export class PgDatabaseService
    implements IDatabaseAbstract, OnApplicationBootstrap {
    public users: IUserRepository<User>;
    public sharedContent: ISharedContentRepository<SharedContent>;
    public reactionsContent: IReactionContentRepository<ReactionContent>;

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(SharedContent)
        private readonly sharedContentRepository: Repository<SharedContent>,
        @InjectRepository(ReactionContent)
        private readonly reactionContentRepository: Repository<ReactionContent>,
    ) { };

    public onApplicationBootstrap() {
        this.users = new PgUserRepository<User>(this.userRepository);
        this.sharedContent = new PgSharedContentRepository<SharedContent>(this.sharedContentRepository);
        this.reactionsContent = new PgReactionContentRepository<ReactionContent>(this.reactionContentRepository);
    };
};