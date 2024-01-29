import Image from "next/image";

// import GetFlowersData from "./api/route";
import FlowerCard from "@/components/flower/flower-card";
import { Flower } from "@/types"
import Container from "@/components/ui/container";
import Pagination from "@/components/pagination";
import Subscription from '@/components/features/subscription'
import ShopFeatures from '@/components/features/shop-feaures'
import OrderSequence from '@/components/features/order-sequence'
import Billboard from "@/components/billboard/Billboard";
import BlogPosts from '@/components/blog/blog-posts'

interface HomeProps {
  searchParams: { page: string };
}
export default async function Home({
  searchParams: { page = "1" },
}: HomeProps) {

  const response = await fetch("http://203.174.26.12:5001");
  const { data }: {data: Flower[] } = await response.json();

  const currentPage = parseInt(page);
  const pageSize = 20;
  const totalItemCount = data.length;
  const totalPages = totalItemCount;
  
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;  


  return (
    <main>
        <div className="pb-10">
          <Billboard />
        </div>
      <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {(currentPage === 1 ? data.slice(startIndex, endIndex) : data).map((data) => (
          <FlowerCard key={data.id} data={data} />
        ))}
      </div>
      <div className="text-center w-full my-10">
        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        )}
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 text-center">
        <Subscription />
        <ShopFeatures />
        <OrderSequence />
        <BlogPosts />
      </div>
      </Container>
    </main>
  );
}
