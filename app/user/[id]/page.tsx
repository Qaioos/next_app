import { User } from "@/app/Types/Types";

import { getData, getToDos } from "@/app/FetchData/DataUsers";

//Components
import ToDosPage from "@/app/Components/ProfileUser/AcitveTask/ToDosPage";
import Artical from "@/app/Components/ProfileUser/ArticalUser/Artical";

interface Props {
    params: Promise<{ id: string }>;
}

const page = async ({ params }: Props) => {
    const { id } = await params;
    const userIndex: number = Number(id);
    const data = (await getData()) as User[] | undefined;
    const ToDos = await getToDos(userIndex + 1);

    console.log(ToDos);

    return (
        <div className="flex w-full  p-4 m-2 flex-wrap bg-gray-200  gap-30">
            <Artical data={data} userIndex={userIndex} />
            <ToDosPage ToDos={ToDos} />
        </div>
    );
};

export default page;
