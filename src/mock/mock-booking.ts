import { Place } from '../types/types';

function getBookingData (): Place[]{
  return (
    [
      {
        'id': '1',
        'location': {
          'address': 'Набережная реки Карповки, 5П',
          'coords': [
            59.968310,
            30.317403
          ]
        },
        'slots': {
          'today': [
            {
              'time': '14:00',
              'isAvailable': false
            }
          ],
          'tomorrow': [
            {
              'time': '14:00',
              'isAvailable': false
            }
          ]
        }
      },
      {
        'id': '2',
        'location': {
          'address': 'улица Льва Толстого, 6/8',
          'coords': [
            59.966937,
            30.317583
          ]
        },
        'slots': {
          'today': [
            {
              'time': '14:00',
              'isAvailable': false
            },
            {
              'time': '16:00',
              'isAvailable': true
            },
            {
              'time': '18:00',
              'isAvailable': true
            }
          ],
          'tomorrow': [
            {
              'time': '12:00',
              'isAvailable': true
            },
            {
              'time': '14:00',
              'isAvailable': true
            },
            {
              'time': '16:00',
              'isAvailable': false
            }
            ,{
              'time': '18:00',
              'isAvailable': false
            }
          ]
        }
      },
      {
        'id': '3',
        'location': {
          'address': 'Петроградский район, 19',
          'coords': [
            59.967726,
            30.313096
          ]
        },
        'slots': {
          'today': [
            {
              'time': '10:00',
              'isAvailable': true
            },
            {
              'time': '12:00',
              'isAvailable': true
            },
            {
              'time': '16:00',
              'isAvailable': true
            }
          ],
          'tomorrow': [
            {
              'time': '10:00',
              'isAvailable': true
            },
            {
              'time': '12:00',
              'isAvailable': true
            },
            {
              'time': '20:00',
              'isAvailable': true
            }
            ,{
              'time': '22:00',
              'isAvailable': true
            }
          ]
        }
      }
    ]
  );
}

export {getBookingData};
