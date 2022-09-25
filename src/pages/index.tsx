type Props = {
  title: string;
};

export default function Home({ title = "Template" }: Props) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
