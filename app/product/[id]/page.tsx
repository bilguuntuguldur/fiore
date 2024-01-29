import Image from "next/image";
import Container from "@/components/ui/container";
import NextBreadcrumb from "@/components/breadcrumbs/page";
import { Metadata } from 'next'
import Info from "@/components/flower/info";
import { Flower } from "@/types"


interface FlowerPageProps {
    params: {
        id: number;
    };
}

const fetchFlower = async (id: number) => {
    const response = await fetch(`http://203.174.26.12:5001/product/${id}`);
    const data = await response.json();
    return data;
} 


export async function generateMetadata({
    params: { id },
    }: FlowerPageProps): Promise<Metadata> {
        const {data}: {data: Flower} = await fetchFlower(id);
    
        return {
        title: data.flowerCode + " - Цэцэгт мэндчилгээ",
        description: data.flowerDesc,
        openGraph: {
            images: [{ url: `http://app.tsetsegtmendchilgee.mn//${data.flowerImage}` }],
        },
        };
}

const FlowerPage = async ({
    params: { id }
}: FlowerPageProps) => {

    const {data}: {data: Flower}  = await fetchFlower(id);
    console.log(data);
    return (
        <Container>

            <NextBreadcrumb 
                homeElement={'Home'}
                separator={<span> / </span>}
                activeClasses='main_color'
                containerClasses='flex py-5 bg-gray-100 px-32' 
                listClasses='hover:underline mx-2 font-bold'
                capitalizeLinks
            />
            <div className="flex flex-col gap-16 my-16 p-16 lg:flex-row lg:items-center">
                <Image 
                    src={`http://app.tsetsegtmendchilgee.mn/${data.flowerImage}`}
                    alt="image"
                    width={400}
                    height={450}
                    className="rounded-lg"
                />
            
            <Info data={data} />
            
            </div>

        </Container>
    );
}

export default FlowerPage;