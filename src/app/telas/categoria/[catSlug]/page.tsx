export default function page({ params }: { params: { catSlug: string } }) {
  return (
    <div>page {params.catSlug}</div>
  )
}
