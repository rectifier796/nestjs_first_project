import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";

export class CustomInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> | Promise<Observable<any>> {
        // console.log('This is intercepting the request', context);

        return handler.handle().pipe(
            map((data)=>{
                // console.log('This is intercepting the response', data);
                const response = {...data, createdAt:data.created_at};
                delete response.updated_at;
                delete response.created_at;
                return response;
            })
        )
    }
}