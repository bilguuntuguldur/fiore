import React from "react";
import Image from "next/image"
import Container from "@/components/ui/container";
import Button from "@/components/button";


const BlogPosts = () => {
    return (
        <Container>
            <div className="w-full flex justify-between gap-8 mb-16">
            <div className="w-1/2 text-left">
                <h4 className="main_gray font-semibold text-2xl my-8">Бусад цэцгийн дэлгүүрүүдээс ялгарах онцлог</h4>
                <p className="main_gray text-sm pb-6">
                    Монголын хамгийн өргөн сонголттой цэцгийн дэлгүүр. Монголын хамгийн хялбар төлбөрийн хэрэгсэл. 
                    Монголын хамгийн хурдан хүргэлт. Монголын хамгийн enjoyable цэцгийн Астра дэлгүүр.
                </p>
                <Button className="main_bg mt-8">Илүү ихийг</Button>
            </div>
            <div className="w-1/2">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jAy04YpgLCU?si=cWASTG8L2e-ffEvB"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            </div>
        </div>
        </Container>
        
    )
}

export default BlogPosts;