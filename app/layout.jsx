import './globals.css';

export const metadata = {
  title: 'Mohith Reddy Desireddy — Product Engineer',
  description:
    'Portfolio of Mohith Reddy Desireddy — Product Engineer & CS student building scalable, user-focused software products.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
