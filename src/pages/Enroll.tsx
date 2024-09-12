import { useEffect } from 'react';
import { ENROLL_FORM_URL } from '../constants/urls';

export default function Enroll() {
  useEffect(() => {
    window.location.replace(ENROLL_FORM_URL);
  }, []);
  return null;
}
