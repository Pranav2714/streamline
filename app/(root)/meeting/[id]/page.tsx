export default async function Meeting({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>Meeting {id}</h1>
    </div>
  );
}
