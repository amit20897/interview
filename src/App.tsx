import React, { useEffect, useState } from 'react';
import { Container, Stack } from '@mui/material';
import { getProfiles } from './services/ProfileService';
import { ProfileData } from './models/Profile';
import Profile from './components/Profile';

function App() {
  const [profiles, setProfiles] = useState<ProfileData[]>([]);

  useEffect(() => {
    getProfiles({query: 'John'}).then((profiles) => {
      setProfiles(profiles);
      console.log(profiles);
    }).catch(console.error)
  }, []);

  return (
    <Container>
      <Stack spacing={1}>
        {profiles.map(p => <Profile profile={p}/>)}
      </Stack>
    </Container>
  );
}

export default App;
