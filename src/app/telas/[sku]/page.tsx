export default function TelasCategory({ params }: { params: { sku: string } }) {
  return (
    <div>
      <h1>Telas category: {params.sku}</h1>
    </div>
  );
}
