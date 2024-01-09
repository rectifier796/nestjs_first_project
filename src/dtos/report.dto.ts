import { Exclude, Expose } from 'class-transformer';
import {IsNumber, IsPositive, IsString, IsNotEmpty, IsOptional} from 'class-validator';
import { ReportType } from 'src/data';

export class CreateReportDto{

    @IsNumber()
    @IsPositive()
    amount:number;

    @IsString()
    @IsNotEmpty()
    source:string;
}

export class UpdateReportDto{

    @IsNumber()
    @IsPositive()
    @IsOptional()
    amount:number;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    source:string;
}

export class ReportResponseDto{
    id:string;
    source:string;
    amount:number;
    @Exclude()
    created_at:Date;

    @Exclude()
    updated_at:Date;
    type: ReportType;

    @Expose({name:'createdAt'})
    transformCreatedAt(){
        return this.created_at;
    }

    constructor(partial: Partial<ReportResponseDto>){
        Object.assign(this,partial);
    }
}