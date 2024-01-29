
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import NavbarActions from "./navbar-actions";
import Container from "@/components/ui/container";
import { redirect } from "next/navigation";

async function searchFlowers(formData: FormData) {
    "use server";
    
    const searchQuery = formData.get("searchQuery")?.toString();
    
    if (searchQuery) {
        redirect("/search?query=" + searchQuery);
    }
}

const Navbar = () => {

    return(
        <div className="main_bg  h-auto p-4 md:h-36 lg:justify-around lg:h-32 text-white border_main">
            <Container>
                <div className="flex flex-wrap items-center justify-center md:justify-around">
                    <div className="hidden md:flex md:w-32 lg:w-80">
                    <form action={searchFlowers}>
                        <div className="form-control relative">
                        <input
                            name="searchQuery"
                            placeholder="Та юу хайж байна вэ?"
                            className="rounded-full input w-full min-w-[140px] text-sm text-black py-2 px-16"
                        >
                        </input>
                        <span className="search_btn">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="magnify_glass"/>
                        </span>
                        </div>
                    </form>
                    </div>

                    <div className="w-full flex justify-between md:w-auto mb-10">
                        <Link 
                        href="/"
                        >
                            <Image 
                            src="/images/Logo-B.svg"
                            alt="Logo-image"
                            width={140}
                            height={80}
                            />
                        </Link>

                        <button
                            type="button"
                            className="inline-flex items-center md:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                            >
                                <path
                                fill="#B88087"
                                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="w-full flex justify-around md:w-auto gap-8">
                        <div className="main_logo_menu">
                            <Image
                            src="/images/yellow/fingerprint.gif"
                            alt="Fingerprint"
                            width={45}
                            height={45}
                            />
                            <span className="text-sm">Хэтэвч</span>
                        </div>
                        <div className="main_logo_menu">
                            <Image
                            src="/images/yellow/love-heart.gif"
                            alt="Fingerprint"
                            width={45}
                            height={45}
                            />
                            <span className="text-sm text-center">Хадгалсан</span>
                        </div>
                        <div className="flex-col justify-center relative">
                            <NavbarActions />
                        </div>
                        <div className="main_logo_menu">
                            <Image
                            src="/images/yellow/avatar.gif"
                            alt="Fingerprint"
                            width={45}
                            height={45}
                            />
                            <span className="text-sm">Нэвтрэх</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar;