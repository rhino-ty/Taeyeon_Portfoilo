import Header from "./Header";
import Footer from "./Footer";

export default function layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
