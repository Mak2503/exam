import { Button } from "@ui/Button";
import Header from "@ui/Navbar";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="p-10">
      <Button text="Home" onClick={() => router.push("/examination")} />
    </div>
  );
}
