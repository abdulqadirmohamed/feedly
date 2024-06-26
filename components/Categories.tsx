import { TCategory } from "@/types/types";
import Link from "next/link";
import Loader from "./loaders/Loader";

const getCategories = async (): Promise<TCategory[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);

    if (res.ok) {
      const categories = await res.json();
      return categories;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export default async function CategoriesList() {
  const categories = await getCategories();
  return (
    <div className="flex gap-2 text-sm flex-wrap">
      {categories && categories.length > 0 ?
        categories.map((category) => (
          <Link
            key={category.id}
            className="px-4 py-1 rounded-md bg-slate-800 capitalize text-white cursor-pointer"
            href={`/category/${category.categoryName}`}
          >
            {category.categoryName}
          </Link>
        )): <Loader/>}
    </div>
  );
}