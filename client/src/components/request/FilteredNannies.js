import React from 'react';
import styles from './FamilyRequest.css';

export default function FilteredNannies({ filteredNannies, handleUpdateRequestedNannies }) {
  if(!filteredNannies) return;

  const nannyList = filteredNannies.map((nanny, i) => {
    return (
      <li key={i}>
        <input id={styles.checkBox} type="checkbox" onChange={handleUpdateRequestedNannies} value={nanny._id} />
        <label><b>{nanny.name}</b> - Rate: ${nanny.pricePerHour} - About Me: {nanny.description}</label>
      </li>
    );
  });
  return (
    <div>
      <ul>{nannyList}</ul>
    </div>
  );
}
