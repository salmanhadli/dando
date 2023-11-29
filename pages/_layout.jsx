import Header from '../components/Layout/AppHeader';

export default function RootLayout({ children }) {
  return (
    <div className="overflow-hidden h-screen">
      <Header />
      <div className="main-body">{children}</div>
    </div>
  );
}
