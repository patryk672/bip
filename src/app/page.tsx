import MainLayout from '@/layouts/MainLayout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <section className="p-8 flex flex-col h-full justify-center">
        <h1 className="text-3xl font-bold font-poppins">BIP</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, porro
          dolore inventore consectetur iste quas error voluptatibus provident
          cumque.
        </p>
      </section>
    </MainLayout>
  );
}
