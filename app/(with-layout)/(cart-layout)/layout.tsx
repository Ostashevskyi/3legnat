import CartLayoutHeader from "@/components/Shared/CartLayoutHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <CartLayoutHeader />
      {children}
    </section>
  );
}
