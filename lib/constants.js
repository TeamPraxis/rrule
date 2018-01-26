
'use strict';

const { Weekday } = require('./weekday');

module.exports = {
  FREQUENCIES: [
    'YEARLY', 'MONTHLY', 'WEEKLY', 'DAILY',
    'HOURLY', 'MINUTELY', 'SECONDLY'
  ],

  YEARLY:   0,
  MONTHLY:  1,
  WEEKLY:   2,
  DAILY:    3,
  HOURLY:   4,
  MINUTELY: 5,
  SECONDLY: 6,

  MO: new Weekday(0),
  TU: new Weekday(1),
  WE: new Weekday(2),
  TH: new Weekday(3),
  FR: new Weekday(4),
  SA: new Weekday(5),
  SU: new Weekday(6)
};