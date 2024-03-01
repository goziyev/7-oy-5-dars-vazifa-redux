import Articles from "@/pages/articles";
import Books from "@/pages/books";
import GetBook from "@/pages/getbook";
import Trusted from "@/pages/trusted";

export default function Home() {
  return (
    <div>
      <Books />
      <Trusted />
      <GetBook />
      <Articles />
    </div>
  );
}
