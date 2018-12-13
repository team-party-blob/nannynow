import React from 'react';

export default function FilteredNannies({ FilteredNannies }) {

  const nannyList = FilteredNannies.map((nanny, i) => {
    return <li key={i}>{nanny.name}</li>;
  });
  return (
    <div>
      <ul>{nannyList}</ul>
    </div>
  );
}
