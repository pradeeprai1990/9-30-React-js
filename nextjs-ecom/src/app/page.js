"use client"
import Image from "next/image";
import { useDispatch } from "react-redux";
import { couterDecrement, couterIncrement } from "./reducers/counterSlice";

export default function Home() {
  let dispatch=useDispatch()  //Function Call slice function call
  return (
    <main className="min-h-screen">
      {/* Heading Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
             Home Page
            </h1>
          </div>
        </div>

        <button onClick={()=>dispatch(couterIncrement())} className="bg-yellow-300 p-3 mr-3">Change count1</button>
        <button onClick={()=>dispatch(couterDecrement())} className="bg-yellow-300 p-3">Change count2</button>
      </section>
    </main>
  );
}
