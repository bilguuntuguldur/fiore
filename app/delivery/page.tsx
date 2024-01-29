import Link from "next/link";

import Container from "@/components/ui/container"

const DeliveryPage = () => {
    return (
        <Container>
            <div className="w-full my-16">
                <h4 className="text-center text-lg uppercase font-bold">Хүргэлтийн нөхцөл</h4>
                <ul className="list-none">
                    <li className="my-4">
                        <span className="uppercase font-semibold">ЕРӨНХИЙ НӨХЦӨЛ</span>
                        <ul className="list-disc pl-8 main_gray mt-4 leading-6">
                            <li>
                                Хүргэлт хотын А бүсэд үнэ төлбөргүй хүргэлт хийгдэнэ. Хотын Б бүсэд хүргэлт 5000 төгрөгөөр хийгдэнэ.
                            </li>
                            <li>
                                Захиалагч бараагаа төв салбар дээрээс өөрөө ирж авбал 0 төг. 
                            </li>
                            <li>
                                Хөдөө орон нутаг руу унаанд тавиулах хүргэлт 5000төг  байна.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className="uppercase font-semibold">Хүргэлтийн цагийн хуваарь</span>
                        <ul className="list-disc pl-8 mt-4 main_gray leading-6">
                            <li>
                                Ажлын өдөр 10:00 - 20:00 цагийн хооронд хүргэлт хийгдэнэ.
                            </li>
                            <li>
                                Амралтын өдөр 10:00 - 15:00 цагийн хооронд хүргэлт хийгдэнэ.
                            </li>
                        </ul>
                    </li>
                    <li className="my-4">
                        <span className="uppercase font-semibold">Хот доторх хүргэлт хийх хязгаарууд: /4-8 цагт/</span>
                        <ul className="list-disc pl-8 main_gray mt-4 leading-6">
                            <li>
                            А бүс Хойшоо-100 айл, Урагшаа-Энхтайваны гүүр, Баруун-Их дэлгүүр, Бөхийн өргөө гэсэн цэгүүдээр хязгаарлагдах ба хотын төвөөс 1км радиуст багтах суурьшлын бүсийг хамруулна.
                            </li>
                            <li>
                            Б бүсэд “А” бүсээс цааших хүн ам ихээр төвлөрсөн суурьшлын бүсээр хязгаарлагдах ба хотын төвөөс 12км хүртэлх радиусаас хэтрэхгүй суурьшлын бүсийг хамруулна. Зуслангийн бүс хамаарахгүй
                            </li>
                            <li>
                            Дээрх хязгааруудаас давах бол 1КМ-1800 ТӨГРӨГИЙН ТӨЛБӨР бэлэн мөнгөөр тооцно.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </Container>
    )
}

export default DeliveryPage;