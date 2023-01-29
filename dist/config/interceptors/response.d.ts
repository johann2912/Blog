import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ResponseFormat } from 'src/lib/dto/responses/format';
export declare class ResponseInterceptor<T> implements NestInterceptor<T, ResponseFormat<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<ResponseFormat<T>>;
}
