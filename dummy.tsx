import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "http://203.174.26.12:5001";

export default async function GetFlowersData() {

    const datas = await fetch(DATA_SOURCE_URL);

    if (!datas) {
        return NextResponse.json(
            {
                message: "Data not found"   
            }
        )
    }
    
    return NextResponse.json(datas);
}