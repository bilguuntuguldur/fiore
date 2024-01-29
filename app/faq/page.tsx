import Link from "next/link"

import Container from "@/components/ui/container"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FaqPage = ( ) => {
    return (
        <Container>
            <div className="w-full my-16">
                <h4 className="text-center text-lg uppercase font-bold my-4">Түгээмэл асуулт хариулт</h4>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Ажиллах цагийн хуваарь?</AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc leading-6">
                                <li>Ажлын өдөр 10:00 - 20:00 цагын хооронд</li>
                                <li>Амралтын өдөр 10:00 - 15:00 цагын хооронд</li>
                                <li>Илүү дэлгэрэнгүй мэдээллийг <Link href="http://localhost:3000/delivery" className="text-red-500 underline">Хүргэлтийн мэдээлэл</Link> хуудаснаас аваарай.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Танай дэлгүүрийн хаяг хаана байдаг вэ?</AccordionTrigger>
                        <AccordionContent>
                            Засгийн газрын ордны хойно Астра цэцгийн дэлгүүр. <Link
                            href="https://www.google.com/maps/place/%D0%90%D1%81%D1%82%D1%80%D0%B0+%2F+%D0%A6%D1%8D%D1%86%D1%8D%D0%B3%D1%82+%D0%BC%D1%8D%D0%BD%D0%B4%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D+%2F+%D0%A6%D1%8D%D1%86%D1%8D%D0%B3+%D1%85%D2%AF%D1%80%D0%B3%D1%8D%D0%BB%D1%82+%2F+Tsetsegt+mendchilgee/@47.9222625,106.9146313,17z/data=!3m1!4b1!4m6!3m5!1s0x5d9693864733020f:0x67b3326bab77d557!8m2!3d47.9222589!4d106.9172062!16s%2Fg%2F11h0tf139p?entry=ttu" 
                            target="_blank"
                            className="text-red-500 underline"> Google map</Link> дээрээс харах.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Хүргэлт хэдэн цагийн дотор хийгдэх вэ?</AccordionTrigger>
                        <AccordionContent>
                            Байршил - аас хамааран 1-5 цагын дотор хүргэлт хийгдэнэ.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </Container>
    )

}

export default FaqPage;