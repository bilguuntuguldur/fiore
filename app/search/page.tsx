
import FlowerCard from '@/components/flower/flower-card'
import { Metadata } from 'next'
import Container from '@/components/ui/container'
import  { Flower } from "@/types"

export function generateMetadata({
    searchParams: {query}
}: SearchPageProps) : Metadata{
    return {
        title: `${query} - Цэцэгт мэндчилгээ`
    }
}

interface SearchPageProps  {
    searchParams: { query: string }
}


export default async function SearchPage({searchParams: {query}}: SearchPageProps) {

    const response = await fetch("http://203.174.26.12:5001");
    const { data }: {data: Flower[] } = await response.json();

    const flowers = data.filter(flower =>
        flower.flowerCode.includes(query)
    );

    if(flowers.length === 0 ){
        return (
            <div className='text-center'>
                <h1 className='text-xl font-semibold main_color uppercase'>No flowers found</h1>
            </div>
        )
    }

    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-16">
                {flowers.map((flower) => (
                    <FlowerCard data={flower} key={flower.id} />
                    ))}
            </div>
        </Container>
    )
}

