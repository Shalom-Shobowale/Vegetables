import Link from "next/link";

export default function Button ({name}){
    return(
        <Link href="/product" className="bg-background text-white px-3 py-[6px] hover:bg-white hover:text-background hover:border hover:border-background rounded-3xl">{name}</Link>
    )
}