import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
