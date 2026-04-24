import { getData } from "@/app/FetchData/DataUsers"

interface Props{
    params :Promise<{ id: string }>
}
interface User {
    picture: {
        large: string;
    };
    name: {
        first: string;
        last: string;
    };
    location:{
        city:string;
    }
}
const page = async ({ params }: Props) => {
    const {id} = await params
    const  data = await getData() as  { data: User[] | undefined }
    const  userIndex = Number(id)
    console.log(data);
     
  return (
    <div>
        <article>
            <div>{userIndex}</div>
            <div> name : {data?.[userIndex]?.name?.first} {data?.[userIndex]?.name?.last}</div>
        </article>
        <main>

        </main>
    </div>
  )
}

export default page
