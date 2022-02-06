import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

function Center() {
  const { data: session } = useSession();
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);

  return (
    <div className=" flex-grow">
      {/* section #1 top header area */}
      <header className="absolute top-5 right-8">
        <div
          className="flex items-center justify-center bg-gray-600  space-x-3 opacity-90 hover:opacity-80
        curosr-poiner rounded-full p-1 pr-2"
        >
          <img
            className="rounded-full w-12 h-12"
            // src={session?.user.image}
            src="https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095205-stock-illustration-businessman-profile-icon.jpg"
            alt="profile image"
          />
          <h2 className="font-bold">{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white padding-8`}
      >
        {/* <img src=" alt=" " > */}
        <h1> hello </h1>
      </section>
    </div>
  );
}

export default Center;
