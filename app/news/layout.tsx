import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "ニュース",
};

type Props = {
  children: React.ReactNode;
};

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}