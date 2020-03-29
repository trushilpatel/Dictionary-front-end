import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonToArrayGoogle'
})
export class JsonToArrayGooglePipe implements PipeTransform {

  transform(value: {}, ...args: unknown[]): unknown {
    let data = [];

    for (let sense in value){
      data.push({
        'sense': sense,
        'def_exa': value[sense]
    });
    }
    return data;
  }

}
