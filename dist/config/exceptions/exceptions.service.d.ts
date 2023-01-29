import { IFormatExceptionMessage } from './interfaces/exception';
import { IException } from './interfaces/message';
export declare class ExceptionsService implements IException {
    notFoundException(data?: IFormatExceptionMessage): void;
    badRequestException(data: IFormatExceptionMessage): void;
    internalServerErrorException(data?: IFormatExceptionMessage): void;
    forbiddenException(data?: IFormatExceptionMessage): void;
    UnauthorizedException(data?: IFormatExceptionMessage): void;
}
