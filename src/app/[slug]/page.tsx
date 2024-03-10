import { data } from '@/data';

export default function Page({ params }: { params: { slug: string } }) {
  const content = data.find(item => item.slug === params.slug) || undefined;

  if (!content) return <div>404 - Strona nie została odnaleziona</div>;

  return (
    <section className="p-8 flex flex-col h-full justify-center">
      <h2 className="text-3xl font-bold font-poppins">{content.title}</h2>
      <div className="text-lg">{content.content}</div>
    </section>
  );
}
