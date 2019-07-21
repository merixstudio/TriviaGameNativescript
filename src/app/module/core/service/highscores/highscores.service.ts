import { Injectable } from '@angular/core';
import { Score } from '~/app/module/core/entity/score/score';

@Injectable({
  providedIn: 'root'
})
export class HighscoresService {
  private list = new Array<Score>(
    { name: 'Jesse', points: '19993' },
    { name: 'Loma', points: '19900' },
    { name: 'Ayako', points: '19888' },
    { name: 'Sabina', points: '19802' },
    { name: 'Eugenie', points: '19793' },
    { name: 'Raymundo', points: '19788' },
    { name: 'Shavonne', points: '19765' },
    { name: 'Karly', points: '19753' },
    { name: 'Stanford', points: '19732' },
    { name: 'Rosalina', points: '19722' },
    { name: 'Vennie', points: '19711' },
    { name: 'Nerissa', points: '19632' },
    { name: 'Christena', points: '19543' },
    { name: 'Brandee', points: '19421' },
    { name: 'Shellie', points: '19333' },
    { name: 'Mirtha', points: '19209' },
    { name: 'Alleen', points: '19124' },
    { name: 'Sally', points: '18992' },
    { name: 'Ashlee', points: '18901' },
    { name: 'Ellena', points: '18888' },
    { name: 'Cleta', points: '17435' },
    { name: 'Inez', points: '16434' },
    { name: 'Sang', points: '15543' },
    { name: 'Sherlene', points: '14321' },
    { name: 'Shalonda', points: '13654' },
    { name: 'Antione', points: '12763' },
    { name: 'Kellie', points: '11275' },
    { name: 'Lorena', points: '10537' },
    { name: 'Cindy', points: '9854' },
    { name: 'Audrie', points: '9814' },
    { name: 'Latoria', points: '9754' },
    { name: 'Rachell', points: '9632' },
    { name: 'Beau', points: '8432' },
    { name: 'Debera', points: '8112' },
    { name: 'Faustina', points: '7432' },
    { name: 'Tyisha', points: '6932' },
    { name: 'Lucina', points: '5751' },
    { name: 'Rolande', points: '4641' },
    { name: 'Wilbur', points: '3657' },
    { name: 'Laree', points: '2632' },
    { name: 'Ben', points: '1742' },
    { name: 'Tommy', points: '1253' },
    { name: 'Rikki', points: '954' },
    { name: 'Breana', points: '654' },
    { name: 'Iraida', points: '531' },
    { name: 'Talisha', points: '453' },
    { name: 'Kandace', points: '329' },
    { name: 'Jestine', points: '251' },
    { name: 'Pedro', points: '42' },
    { name: 'Rana', points: '12' },
  );

  getList(): Score[] {
    return this.list;
  }
}
