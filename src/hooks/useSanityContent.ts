import { useState, useEffect } from 'react';
import client from '../lib/sanityClient';

export function useSanityContent(query: string) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(query);
        setData(result[0] || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load content. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, error, loading };
}

export function useSanityContentArray(query: string) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(query);
        setData(Array.isArray(result) ? result : []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load content. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, error, loading };
}