import { inter } from '@/app/ui/font';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h1> {children} </h1>
  );
}
