import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Cookies - Redirecting',
};

export default function CookiesRedirectPage() {
  redirect('/cookie-policy');
}
