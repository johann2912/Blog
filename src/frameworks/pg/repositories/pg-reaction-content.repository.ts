import { IReactionContentRepository } from "../core/abstract/reaction-content-repository.abstract";
import { PgGenericRepository } from "./pg-generic.repository";

export class PgReactionContentRepository<T> 
    extends PgGenericRepository<T>
    implements IReactionContentRepository<T>
{};