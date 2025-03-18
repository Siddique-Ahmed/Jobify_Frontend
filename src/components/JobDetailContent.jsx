import React from "react";
import Button from "../global/Button";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";

const JobDetailContent = () => {
  return (
    <div className="w-full min-h-screen pt-18 sm:px-4">
      <div className="container mx-auto px-4 py-3">
        {/* job Detail content */}
        <div className="w-full flex gap-4 flex-col">
          {/* first side */}
          <div className="w-full flex items-center gap-2">
            <div className="flex-1 flex items-center gap-3">
              <div className="w-[90px] h-[90px] rounded-full">
                <img
                  src="https://plus.unsplash.com/premium_photo-1668902219196-f1cf3c7250eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXBhbnklMjBsb2dvfGVufDB8fDB8fHww"
                  alt=""
                  className="w-full h-full  object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-gray-800">Google</h1>
                <span className="text-sm font-semibold text-gray-500">
                  Karachi
                </span>
              </div>
            </div>
            <div className="w-full hidden sm:flex items-center justify-end">
              <div className="flex items-center gap-2">
                <Button
                  isIcon={true}
                  icon={<FaRegBookmark size={18} />}
                  iconPosition={"center"}
                  className={" rounded-full p-2 border border-gray-300"}
                />
                <Button
                  isText={true}
                  text={"Apply"}
                  className={
                    "w-[90px] px-4 p-2 bg-blue-600 font-bold text-gray-100 rounded-sm hover:bg-blue-500"
                  }
                />
              </div>
            </div>
          </div>
          {/* second side */}
          <div className="w-full flex flex-col gap-1.5">
            <div className="w-full flex items-center justify-between">
            <h1 className="font-bold text-xl sm:text-2xl text-gray-700">
              Frontend Developer
            </h1>
            <span className="text-gray-500 font-medium">
              10/4/2023
            </span>
            </div>
            <span className="text-md text-gray-500 font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis reiciendis vero adipisci odio suscipit eligendi, velit
              debitis dolorem modi illum tenetur voluptatum provident corrupti
              quos unde numquam maiores, ipsum explicabo nulla quo! Incidunt hic
              saepe, quod cumque laborum atque ratione magnam laudantium
              expedita, unde dicta consequatur enim eos ab praesentium. Vitae
              voluptas cupiditate ullam exercitationem quasi, quas ratione
              nostrum dolores earum harum. Incidunt veniam, dignissimos nesciunt
              nobis molestias itaque sed adipisci consectetur reprehenderit
              optio possimus pariatur minus iure exercitationem autem aperiam
              velit ipsum? Rem eveniet provident beatae eum nam illum cumque,
              eligendi earum, accusamus reprehenderit veniam aperiam dignissimos
              assumenda sapiente fugiat voluptates ipsum iusto, eius et. Vero
              quasi, accusantium repellat nam corporis veniam officia accusamus
              ab ad molestiae beatae similique amet mollitia ut. Maiores minima
              ad, tempore, molestias eius sunt, doloremque quas at rerum
              quisquam enim dolorem. Commodi quaerat vel nemo alias
            </span>
            <div className="w-full my-2 flex sm:hidden justify-center relative items-center gap-2">
              <Button
                isIcon={true}
                icon={<FaRegBookmark size={18} />}
                iconPosition={"center"}
                className={" rounded-full self-end p-2 border border-gray-300 absolute right-0 top-0"}
              />
              <Button
                isText={true}
                text={"Apply"}
                className={
                  "w-[190px] px-4 p-2 bg-blue-600 font-bold text-gray-100 rounded-sm hover:bg-blue-500"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailContent;
