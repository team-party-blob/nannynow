import React from 'react';

export default function roleSwitch({ Admin, Nanny, Family }) {
  return function RollSwitchComponent(props) {
    if (!props.user) return null;

    switch (props.user.role) {
      case 'admin':
        return <Admin {...props} />
      case 'nanny':
        return <Nanny {...props} />
      case 'family':
        return <Family {...props} />
      default:
        throw 'Invalid role';
    }
  }
}
