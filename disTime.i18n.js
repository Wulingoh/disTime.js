/* * * * * * * * * *
 *   disTime .js   *
 *  Version 0.7.7  *
 *  License:  MIT  *
 * Simon  Waldherr *
 * * * * * * * * * */

/*jslint browser: true, indent: 2, plusplus: true */

function trim11(str) {
  "use strict";
  var i;
  str = str.replace(/^\s+/, '');
  for (i = str.length - 1; i >= 0; i--) {
    if (/\S/.test(str.charAt(i))) {
      str = str.substring(0, i + 1);
      break;
    }
  }
  return str;
}

function checkForAnd(detailed, insert, language) {
  "use strict";
  if (detailed && trim11(insert) !== language.words.preAgo && trim11(insert) !== language.words.inFuture) {
    return ' ' + language.words.and + ' ';
  }
  return '';
}

var languages = {
  'declOfNum': function (mode, number, titles) {
    "use strict";
    var cases;
    if (mode === 2) {
      cases = [2, 0, 1, 1, 1, 2];
    } else {
      if (number === 1) {
        return titles[0];
      }
      return titles[1];
    }
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  },
  'int': {
    words: {
      'preAgo': '',
      'postAgo': 'ago',
      'and': ' ',
      'inFuture': 'in'
    },
    mode: 1,
    year: ['Y', 'Y'],
    month: ['M', 'M'],
    week: ['W', 'W'],
    day: ['D', 'D'],
    hour: ['h', 'h'],
    minute: ['min', 'min'],
    second: ['sec', 'sec']
  },
  'en': {
    words: {
      'preAgo': '',
      'postAgo': 'ago',
      'and': 'and',
      'inFuture': 'in'
    },
    mode: 1,
    year: ['year', 'years'],
    month: ['month', 'months'],
    week: ['week', 'weeks'],
    day: ['day', 'days'],
    hour: ['hour', 'hours'],
    minute: ['minute', 'minutes'],
    second: ['second', 'seconds']
  },
  'de': {
    words: {
      'preAgo': 'vor',
      'postAgo': '',
      'and': 'und',
      'inFuture': 'in'
    },
    mode: 1,
    year: ['Jahr', 'Jahren'],
    month: ['Monat', 'Monaten'],
    week: ['Woche', 'Wochen'],
    day: ['Tag', 'Tagen'],
    hour: ['Stunde', 'Stunden'],
    minute: ['Minute', 'Minuten'],
    second: ['Sekunde', 'Sekunden']
  },
  'nl': {
    words: {
      'preAgo': '',
      'postAgo': 'geleden',
      'and': 'en',
      'inFuture': 'in'
    },
    mode: 1,
    year: ['jaar', 'jaar'],
    month: ['maand', 'maanden'],
    week: ['week', 'weken'],
    day: ['dag', 'dagen'],
    hour: ['uur', 'uren'],
    minute: ['minuut', 'minuten'],
    second: ['seconde', 'seconden']
  },
  'it': {
    words: {
      'preAgo': '',
      'postAgo': 'fa',
      'and': 'e',
      'inFuture': 'in'
    },
    mode: 1,
    year: ['anno', 'anni'],
    month: ['mese', 'mesi'],
    week: ['settimana', 'settimane'],
    day: ['giorno', 'giorni'],
    hour: ['ora', 'ore'],
    minute: ['minuto', 'minuti'],
    second: ['secondo', 'secondi']
  },
  'es': {
    words: {
      'preAgo': '',
      'postAgo': 'antes',
      'and': 'y',
      'inFuture': 'en'
    },
    mode: 1,
    year: ['año', 'años'],
    month: ['mes', 'meses'],
    week: ['semana', 'semanas'],
    day: ['día ', 'días'],
    hour: ['hora', 'horas'],
    minute: ['minuto', 'minutos'],
    second: ['segundo', 'segundos']
  },
  'fr': {
    words: {
      'preAgo': 'il ya',
      'postAgo': '',
      'and': 'et',
      'inFuture': 'dans '
    },
    mode: 1,
    year: ['an', 'ans'],
    month: ['mois', 'mois'],
    week: ['semaine', 'semaines'],
    day: ['jour', 'jours'],
    hour: ['heure', 'heures'],
    minute: ['minute', 'minutes'],
    second: ['seconde', 'secondes']
  },
  'pt': {
    words: {
      'preAgo': '',
      'postAgo': 'atrás',
      'and': 'e',
      'inFuture': 'em'
    },
    mode: 1,
    year: ['ano', 'anos'],
    month: ['mês', 'meses'],
    week: ['semana', 'semanas'],
    day: ['dia', 'dias'],
    hour: ['hora', 'horas'],
    minute: ['minuto', 'minutos'],
    second: ['segundo', 'segundos']
  },
  'ru': {
    words: {
      'preAgo': '',
      'postAgo': 'назад',
      'and': 'и',
      'inFuture': 'через'
    },
    mode: 2,
    year: ['год', 'года', 'лет'],
    month: ['месяц', 'месяца', 'месяцев'],
    week: ['неделя', 'недели', 'недель'],
    day: ['день', 'дня', 'дней'],
    hour: ['час', 'часа', 'часов'],
    minute: ['минуту', 'минуты', 'минут'],
    second: ['секунду', 'секунды', 'секунд']
  },
  'uk': {
    words: {
      'preAgo': '',
      'postAgo': 'тому',
      'and': '',
      'inFuture': 'за'
    },
    mode: 2,
    year: ['рік', 'роки', 'років'],
    month: ['місяць', 'місяці', 'місяців'],
    week: ['тиждень', 'тижня', 'тижнів'],
    day: ['день', 'дні', 'днів'],
    hour: ['годину', 'години', 'годин'],
    minute: ['хвилину', 'хвилини', 'хвилин'],
    second: ['секунду', 'секунди', 'секунд']
  }
};
