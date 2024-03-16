import { data } from '@/data/data';
import Node from '@/components/Node/Node';

export default function Page({ params }: { params: { slug: string } }) {
  const content = data.find(item => item.slug === params.slug) || undefined;

  if (!content) return <div>404 - Strona nie została odnaleziona</div>;

  return (
    <Node>
      <Node.Title>{content.title}</Node.Title>
      <p className="text-lg mt-5">{content.content}</p>
    </Node>
  );
}
