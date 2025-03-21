import { AlignJustifyIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen h-screen flex">
      <aside className="w-1/6 h-full p-3 bg-neutral-900">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-end">
            <AlignJustifyIcon size={30} color="#0080ff" />
          </div>
          <div className="flex justify-center mb-19">
            <div className="w-9/12">
              <input
                className="w-full text-amber-50 bg-gray-500 h-9 pl-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.5)" }}
                placeholder="Search here"
              />
            </div>
          </div>
        </div>
      </aside>
      <main className="w-full h-full bg-neutral-800"></main>
    </div>
  );
}
