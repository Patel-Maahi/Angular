import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, searchData:any) {
    return value.filter((item:any)=>{
      return  item.name.toUpperCase().indexOf(searchData.toUpperCase()) > -1 || item.subject.toUpperCase().indexOf(searchData.toUpperCase()) > -1 || item.id.toString().toUpperCase().indexOf(searchData.toUpperCase()) > -1 ;
    })
  }
}
