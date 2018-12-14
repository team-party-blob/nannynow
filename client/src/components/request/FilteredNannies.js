import React from 'react';

export default function FilteredNannies({ filteredNannies, searchQuery }) {
  if(!filteredNannies) return;
  const nannyList = filteredNannies.map((nanny, i) => {
    return (
      <li key={i}>
        <input type="checkbox"></input>
        <label>{nanny.name} - Rate: ${nanny.pricePerHour} - About Me: {nanny.description}</label>
      </li>
    );
  });
  return (
    <div>
      <ul>{nannyList}</ul>
    </div>
  );
}
