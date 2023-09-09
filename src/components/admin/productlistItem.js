import { RiDeleteBack2Line } from "react-icons/ri";

function ProductlistItem({data,deleteProduct}) {



    return (
        <div>
            <ul className="max-h-[280px] overflow-auto">
                {data.map((x) => {
                    return (
                        <li
                            key={x._id}
                            className="bg-gray-300 text-black py-2 px-4 rounded-md flex items-center justify-between my-3"
                        >
                            {" "}
                            <span>{x.productName}</span>{" "}
                            <span>{x.status === true ? <div className=" text-green-800 rounded-md font-bold">Active</div> : <div className="text-red-800 rounded-md font-bold">Disable</div>}</span>{" "}
                            <RiDeleteBack2Line className="text-red-800 cursor-pointer" size={25} onClick={()=>deleteProduct(x)} />{" "}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProductlistItem;
