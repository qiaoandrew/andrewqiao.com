interface IDProps {
  id: string;
}

export default function ID({ id }: IDProps) {
  return <div id={id} className="absolute -mt-20 md:-mt-28" />;
}
