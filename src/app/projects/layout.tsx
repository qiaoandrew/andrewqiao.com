import Footer from '@/components/navigation/Footer';

interface ProjectLayoutProps {
  children: React.ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <>
      <div className="container mb-36 md:mb-44">{children}</div>
      <Footer />
    </>
  );
}
