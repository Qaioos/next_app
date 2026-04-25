//React Icons
import { Todos } from "@/app/Types/Types";

import { FaTasks } from "react-icons/fa";
import { TbPlayerRecordFilled } from "react-icons/tb";

    




const ToDosPage = ({ ToDos }: { ToDos: Todos[] }) => {
    return (
        <div className="flex-1 bg-white rounded-2xl">
            <header className="flex justify-between w-full items-center p-4">
                <div className="flex items-center  gap-2">
                    <FaTasks className="text-2xl font-bold text-blue-700" />
                    <h1 className="text-2xl font-bold">Active Tasks</h1>
                </div>
                <button className="btn btn-primary rounded-full">
                    {ToDos?.length} Total
                </button>
            </header>

            <main>
                <ul className="flex flex-col gap-4 p-4">
                    {ToDos?.map((todo: Todos) => (
                        <li
                            key={todo.id}
                            className="bg-white p-4 rounded-lg flex items-center gap-3 shadow"
                        >
                            <TbPlayerRecordFilled className={todo.completed ? "text-green-500" : "text-red-500"} />

                            {todo.completed ? <s><h2 className="text-lg font-bold">{todo.title}</h2></s> : <h2 className="text-lg  font-bold text-gray-500">{todo.title}</h2>}
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default ToDosPage;
