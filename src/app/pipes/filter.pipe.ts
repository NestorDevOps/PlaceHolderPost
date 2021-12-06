import { Pipe, PipeTransform } from '@angular/core';

/**
 * class pipe with filter list post with username
 */

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /**
   * transform value
   * @param value 
   * @param arg 
   * @returns 
   */
  transform(value: any, arg: any): any {
    const resultCards = [];
    for(const card of value){
      if(card.user.username.indexOf(arg) > -1){
        resultCards.push(card);
      };
    };
    return resultCards;
  }

}
