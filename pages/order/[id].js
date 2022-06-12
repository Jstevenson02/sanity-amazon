import { Alert, Box, CircularProgress, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import React from 'react';
import Layout from '../../components/Layout';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, orders: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
  }
}

export default function OrderScreen({ params }) {
  const { id: orderId } = params;
  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    orders: {},
    error: '',
  });

  return (
    <Layout title={`Order ${orderId}`}>
      <Typography component="h1" variant="h1">
        Order {orderId}
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="error">{error}</Alert>
      ) : (
        <Box></Box>
      )}
    </Layout>
  );
}
