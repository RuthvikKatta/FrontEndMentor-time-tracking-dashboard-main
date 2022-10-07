'use strict';

let data=[
    {
      'title': 'Work',
      'timeframes': {
        'daily': {
          'current': 5,
          'previous': 7
        },
        'weekly': {
          'current': 32,
          'previous': 36
        },
        'monthly': {
          'current': 103,
          'previous': 128
        }
      }
    },
    {
      'title': 'Play',
      'timeframes': {
        'daily': {
          'current': 1,
          'previous': 2
        },
        'weekly': {
          'current': 10,
          'previous': 8
        },
        'monthly': {
          'current': 23,
          'previous': 29
        }
      }
    },
    {
      'title': 'Study',
      'timeframes': {
        'daily': {
          'current': 0,
          'previous': 1
        },
        'weekly': {
          'current': 4,
          'previous': 7
        },
        'monthly': {
          'current': 13,
          'previous': 19
        }
      }
    },
    {
      'title': 'Exercise',
      'timeframes': {
        'daily': {
          'current': 1,
          'previous': 1
        },
        'weekly': {
          'current': 4,
          'previous': 5
        },
        'monthly': {
          'current': 11,
          'previous': 18
        }
      }
    },
    {
      'title': 'Social',
      'timeframes': {
        'daily': {
          'current': 1,
          'previous': 3
        },
        'weekly': {
          'current': 5,
          'previous': 10
        },
        'monthly': {
          'current': 21,
          'previous': 23
        }
      }
    },
    {
      'title': 'Self Care',
      'timeframes': {
        'daily': {
          'current': 0,
          'previous': 1
        },
        'weekly': {
          'current': 2,
          'previous': 2
        },
        'monthly': {
          'current': 7,
          'previous': 11
        }
      }
    }
  ]

const workh1 = document.getElementById('workh1');
const playh1 = document.getElementById('playh1');
const studyh1 = document.getElementById('studyh1');
const exerciseh1 = document.getElementById('exerciseh1');
const socialh1 = document.getElementById('socialh1');
const selfh1 = document.getElementById('selfh1');

const workh6 = document.getElementById('workh6');
const playh6 = document.getElementById('playh6');
const studyh6 = document.getElementById('studyh6');
const exerciseh6 = document.getElementById('exerciseh6');
const socialh6 = document.getElementById('socialh6');
const selfh6 = document.getElementById('selfh6');

document.getElementById ('daily').addEventListener('click',daily,false);
document.getElementById ('weekly').addEventListener('click',weekly,false);
document.getElementById ('monthly').addEventListener('click',monthly,false);


function daily(){
    document.querySelector('.l1').classList.add('active');
    document.querySelector('.l2').classList.remove('active');
    document.querySelector('.l3').classList.remove('active');
    workh1.innerHTML = data[0]['timeframes']['daily'].current + 'hrs'; 
    playh1.innerHTML = data[1]['timeframes']['daily'].current + 'hrs';
    studyh1.innerHTML = data[2]['timeframes']['daily'].current + 'hrs';
    exerciseh1.innerHTML = data[3]['timeframes']['daily'].current + 'hrs';
    socialh1.innerHTML = data[4]['timeframes']['daily'].current + 'hrs';
    selfh1.innerHTML = data[5]['timeframes']['daily'].current + 'hrs';

    workh6.innerHTMl = data[0]['timeframes']['daily'].previous + 'hrs';
    playh6.innerHTML = data[1]['timeframes']['daily'].previous + 'hrs';
    studyh6.innerHTML = data[2]['timeframes']['daily'].previous + 'hrs';
    exerciseh6.innerHTML = data[3]['timeframes']['daily'].previous + 'hrs';
    socialh6.innerHTML = data[4]['timeframes']['daily'].previous + 'hrs';
    selfh6.innerHTML = data[5]['timeframes']['daily'].previous + 'hrs';
}

function weekly(){
    document.querySelector('.l1').classList.remove('active');
    document.querySelector('.l2').classList.add('active');
    document.querySelector('.l3').classList.remove('active');
    workh1.innerHTML = data[0]['timeframes']['weekly'].current + 'hrs';
    playh1.innerHTML = data[1]['timeframes']['weekly'].current + 'hrs';
    studyh1.innerHTML = data[2]['timeframes']['weekly'].current + 'hrs';
    exerciseh1.innerHTML = data[3]['timeframes']['weekly'].current + 'hrs';
    socialh1.innerHTML = data[4]['timeframes']['weekly'].current + 'hrs';
    selfh1.innerHTML = data[5]['timeframes']['weekly'].current + 'hrs';

    workh6.innerHTML = data[0]['timeframes']['weekly'].previous + 'hrs';
    playh6.innerHTML = data[1]['timeframes']['weekly'].previous + 'hrs';
    studyh6.innerHTML = data[2]['timeframes']['weekly'].previous + 'hrs';
    exerciseh6.innerHTML = data[3]['timeframes']['weekly'].previous + 'hrs';
    socialh6.innerHTML = data[4]['timeframes']['weekly'].previous + 'hrs';
    selfh6.innerHTML = data[5]['timeframes']['weekly'].previous + 'hrs';
}

function monthly(){
    document.querySelector('.l1').classList.remove('active');
    document.querySelector('.l2').classList.remove('active');
    document.querySelector('.l3').classList.add('active');
    workh1.innerHTML = data[0]['timeframes']['monthly'].current + 'hrs';
    playh1.innerHTML = data[1]['timeframes']['monthly'].current + 'hrs';
    studyh1.innerHTML = data[2]['timeframes']['monthly'].current + 'hrs';
    exerciseh1.innerHTML = data[3]['timeframes']['monthly'].current + 'hrs';
    socialh1.innerHTML = data[4]['timeframes']['monthly'].current + 'hrs';
    selfh1.innerHTML = data[5]['timeframes']['monthly'].current + 'hrs';

    workh6.innerHTML = data[0]['timeframes']['monthly'].previous + 'hrs';
    playh6.innerHTML = data[1]['timeframes']['monthly'].previous + 'hrs';
    studyh6.innerHTML = data[2]['timeframes']['monthly'].previous + 'hrs';
    exerciseh6.innerHTML = data[3]['timeframes']['monthly'].previous + 'hrs';
    socialh6.innerHTML = data[4]['timeframes']['monthly'].previous + 'hrs';
    selfh6.innerHTML = data[5]['timeframes']['monthly'].previous + 'hrs';
}