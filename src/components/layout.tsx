export default function layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <h1>레이아웃</h1>
      <div>{children}</div>
    </>
  );
}
