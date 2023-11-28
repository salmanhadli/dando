import Header from '../components/Layout/AppHeader';

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
