import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'entityDecode'
})
export class EntityDecodePipe implements PipeTransform {

  transform(value: string): string {
    const map = {
      '&amp;': '&',
      '&#038;': "&",
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#039;': "'",
      '&#8217;': "’",
      '&#8216;': "‘",
      '&#8211;': "–",
      '&#8212;': "—",
      '&#8230;': "…",
      '&#8221;': '”'
    };

    return value.replace(/\&[\w\d\#]{2,5}\;/g, m => map[m]);
  }

}
