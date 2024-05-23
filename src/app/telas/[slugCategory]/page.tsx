export default function TelasCategory({ params }: { params: { slugCategory: string } }) {
  return (
    <div>
      <h1>Telas category: {params.slugCategory}</h1>
    </div>
  );
}
