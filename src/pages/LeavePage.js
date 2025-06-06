import React, { useEffect, useState } from 'react';
import {
  TextField, Button, Paper, Typography, Box, Table, TableHead,
  TableRow, TableCell, TableBody, Chip
} from '@mui/material';

function LeavePage() {
  const [leaves, setLeaves] = useState([]);
  const [form, setForm] = useState({ start_date: '', end_date: '', reason: '' });

  const applyLeave = () => {
    const newLeave = {
      id: Date.now(),
      ...form,
      status: 'Pending'
    };
    setLeaves([...leaves, newLeave]);
    setForm({ start_date: '', end_date: '', reason: '' });
  };

  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>Leave Management</Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" mb={2}>Apply for Leave</Typography>
        <TextField
          label="Start Date"
          type="date"
          fullWidth
          value={form.start_date}
          onChange={e => setForm({ ...form, start_date: e.target.value })}
          sx={{ mb: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="End Date"
          type="date"
          fullWidth
          value={form.end_date}
          onChange={e => setForm({ ...form, end_date: e.target.value })}
          sx={{ mb: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Reason"
          fullWidth
          value={form.reason}
          onChange={e => setForm({ ...form, reason: e.target.value })}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={applyLeave}>Apply</Button>
      </Paper>

      <Typography variant="h6" gutterBottom>Leave History</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Reason</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaves.map(leave => (
            <TableRow key={leave.id}>
              <TableCell>{leave.start_date}</TableCell>
              <TableCell>{leave.end_date}</TableCell>
              <TableCell>{leave.reason}</TableCell>
              <TableCell>
                <Chip label={leave.status} color="warning" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default LeavePage;
