import React from 'react';

export default function FilteredNannies({ FilteredNannies, searchQuery }) {
  const fakeFilteredNannies = [
    {
      _id: '1234',
      name: 'Mrs. Doubtfire',
      streetAddress1: '3 Monroe Parkway Suite P#129',
      city: 'Lake Oswego',
      state: 'OR',
      zip: '97035',
      phone: '5105010844',
      description:
      'I am a nanny in disguise to spy on children for my own personal gain',
      age: 42,
      user: '122344141',
      pricePerHour: 8.25,
      createdDate: '12-08-83'
    },
    {
      _id: '12345',
      name: 'Anothernanny',
      streetAddress1: '3 Monroe Parkway Suite P#129',
      city: 'Lake Oswego',
      state: 'OR',
      zip: '97035',
      phone: '5105010844',
      description:
      'I am a nanny in disguise to spy on children for my own personal gain',
      age: 42,
      user: '4444444',
      pricePerHour: 8.25,
      createdDate: '12-08-83'
    }
  ];
  const nannyList = fakeFilteredNannies.map((nanny, i) => {
    return <li key={i}>{nanny.name}</li>;
  });
  return (
    <div>
      <ul>{nannyList}</ul>
    </div>
  );
}
