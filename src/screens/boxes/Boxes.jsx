import ID from "../id-box/ID";
import './boxes.css';
import React from 'react'


const Boxes = React.forwardRef((props, ref) => {
  const usersIds = [
    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl:'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/honza.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
    },
    },
    {
      firstName:'Muadh',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/jeremy.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },
    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/julien.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },
    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/olivier.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },
    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/xander.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },
    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/julien.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },
    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/olivier.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },
    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/xander.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },
    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/julien.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },
    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/olivier.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },
    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/xander.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },
    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/julien.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },
    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/olivier.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },

    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/olivier.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },

    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/olivier.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },

    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/olivier.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },
    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/olivier.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },

    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/olivier.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },

    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/olivier.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },

    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/olivier.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },

    {
      firstName:'Miran',
      lastName:'Thaqi',
      middleName:'Faik',
      photoUrl: 'https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/algolia/men/olivier.png',
      address: {
        street: "Kamer Thaqi",
        suite: "Apt. 692",
        city: "Drenas",
        zipcode: "1300",
      }
    },

  ]

  return (
      <div className="boxes">
        {usersIds.map((user,idx) => {
          return <ID data={user} key={idx} idx={idx}/>
        } )}
      </div>
  );
});

export default Boxes;
