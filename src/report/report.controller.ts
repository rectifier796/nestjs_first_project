import {Controller, Get, Post, Put, Delete, Param, Body, HttpCode, ParseUUIDPipe, ParseEnumPipe } from "@nestjs/common";
import { data, ReportType, Data, Report } from "../data";
import {v4 as uuid} from 'uuid';
import { ReportService } from "./report.service";
import { CreateReportDto, ReportResponseDto, UpdateReportDto } from "../dtos/report.dto";


@Controller("report/:type")
export class ReportController{

  constructor( private readonly reportService: ReportService){}

  @Get()
  getAllReports( @Param('type', new ParseEnumPipe(ReportType)) type:string): ReportResponseDto[]{
    const reportType = type==='expense'?ReportType.EXPENSE:ReportType.INCOME;
    return this.reportService.getAllReports(reportType);
  }

  @Get(":id")
  getReportById(@Param('type', new ParseEnumPipe(ReportType)) type:String, @Param('id', ParseUUIDPipe) id:string): ReportResponseDto{
    const reportType = type==='expense'?ReportType.EXPENSE:ReportType.INCOME;
    return this.reportService.getReportById(reportType,id);
  }

  @Post()
  createReport(@Body() body: CreateReportDto, @Param('type', new ParseEnumPipe(ReportType)) type:string):ReportResponseDto{
    const reportType = type==='expense'?ReportType.EXPENSE:ReportType.INCOME;
    return this.reportService.createReport(body,reportType);
  }

  @Put(':id')
  updateReport( @Param('type', new ParseEnumPipe(ReportType)) type:string, @Param('id', ParseUUIDPipe) id:string,
  @Body() body:UpdateReportDto
  ):ReportResponseDto{
    console.log(body);
    const reportType = type==='expense'?ReportType.EXPENSE:ReportType.INCOME;
    return this.reportService.updateReport(type,id,body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id:string, @Param('type', new ParseEnumPipe(ReportType)) type:string){
    const reportType = type==='expense'?ReportType.EXPENSE:ReportType.INCOME;

    return this.reportService.deleteReport(id,reportType);
  }
}