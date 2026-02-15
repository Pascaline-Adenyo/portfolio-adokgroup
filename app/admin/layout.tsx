import Providers from '../providers/SessionProvider';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
