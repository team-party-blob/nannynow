import React from 'react';
import NannyProfile from './NannyProfile';
import FamilyProfile from './FamilyProfile';

export default function Profile({ session, profile, updateProfile, createProfile }) {
  
  const { role } = session;
  return (
    <div>
      {role === 'nanny' && <NannyProfile session={session} profile={profile} updateProfile={updateProfile} createProfile={createProfile} />}
      {role === 'family' && <FamilyProfile session={session} profile={profile} updateProfile={updateProfile} createProfile={createProfile}/>}
    </div>
  );
}
