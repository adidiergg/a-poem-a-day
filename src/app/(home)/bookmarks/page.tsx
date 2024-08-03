"use client";
import { BookMarks } from "~/app/_components/BookMarks";

export default function PageBookMarks() {
  return (
    <>
      <h1 className="text-center text-xl font-semibold text-background mb-4">
        Guardados
      </h1>
      <BookMarks />
    </>
  );
}
