import { Injectable } from '@nestjs/common';
import { ReportType, data, Report } from '../data';
import {v4 as uuid} from 'uuid';
import { ReportResponseDto } from '../dtos/report.dto';

@Injectable()
export class ReportService {
  
  getAllReports(type: ReportType): ReportResponseDto[]{
    return data.report.filter((report: Report) : boolean=>{
      return report.type===type;
    }).map((report: Report):ReportResponseDto=>new ReportResponseDto(report));
  }

  getReportById(type:ReportType, id:string): ReportResponseDto{
    const report =  data.report.filter((report)=> report.type===type).find((report)=>report.id===id);
    if(!report)
    return;

    return new ReportResponseDto(report);
  }

  createReport({amount, source}: {source:string, amount:number}, type:ReportType): ReportResponseDto{
    const newReport={
      id:uuid(),
      source,
      amount,
      created_at:new Date(),
      updated_at:new Date(),
      type:type==='expense'?ReportType.EXPENSE:ReportType.INCOME
    }
    data.report.push(newReport);
    return new ReportResponseDto(newReport);
  }

  updateReport( type:string, id:string,
  body:{source?:string; amount?:number}
  ):ReportResponseDto{
    const reportToUpdate =  data.report.filter((report)=> report.type===type).find((report)=>report.id===id);
    if(!reportToUpdate) return;

    const reportIndex = data.report.findIndex((report)=>report.id===reportToUpdate.id);

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_at: new Date()
    };
    return new ReportResponseDto(data.report[reportIndex]);
  }

  deleteReport(id:string, type:string){

    const reportToUpdate =  data.report.filter((report)=> report.type===type).find((report)=>report.id===id);
    if(!reportToUpdate) return "Report Not Found";

    const reportIndex = data.report.findIndex((report)=>report.id===id);

    data.report.splice(reportIndex,1);

    return;
  }

}
