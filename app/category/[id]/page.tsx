import Image from "next/image";
import Container from "@/components/ui/container";
import FlowerCard from "@/components/flower/flower-card";
import { Flower } from "@/types";
import Pagination from "@/components/pagination";

interface CategoryProps {
    params: {
        id: number,
    },
    searchParams: { page: string },
}

const fetchCategoryFlowers = async (id: number) => {

    const response = await fetch(`http://203.174.26.12:5001/category/${id}`);
    const data = await response.json();
    return data;
}

const Category: React.FC<CategoryProps>  = async ({
    params: { id },
    searchParams: { page = "1" },
}) => {

    const {data}: { data: Flower[]}  = await fetchCategoryFlowers(id);
    const currentPage = parseInt(page);
    const pageSize = 15;
    const totalItemCount = data.length;
    const totalPages = totalItemCount;
    
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return (

        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {data.map((data) => (
                    <FlowerCard key={data.id} data={data} />
                ))}
            </div>
            <div className="text-center w-full my-10">
                {totalPages > 1 && (
                    <Pagination currentPage={currentPage} totalPages={totalPages} />
                )}
            </div>
        </Container>
    )
}

export default Category;