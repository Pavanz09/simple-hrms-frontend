import React from 'react';
import {
  Card, CardContent, Typography, Avatar, Box
} from '@mui/material';

function ProfilePage() {
  const profile = {
    name: 'John Doe',
    email: 'john@example.com',
    position: 'Software Engineer',
  };

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Card sx={{ width: 400, padding: 3 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={{ width: 80, height: 80, mb: 2 }}>JD</Avatar>
          <Typography variant="h5" gutterBottom>{profile.name}</Typography>
          <Typography color="text.secondary">{profile.email}</Typography>
          <Typography variant="subtitle1" mt={2}>{profile.position}</Typography>
        </Box>
      </Card>
    </Box>
  );
}

export default ProfilePage;
