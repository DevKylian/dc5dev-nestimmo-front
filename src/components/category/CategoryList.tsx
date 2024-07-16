"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { fetchAllCategories } from "@/services/category.service";
import CategoryList from "@/components/category/CategoryList";
import DrawerCategory from "@/components/category/DrawerCategory";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PostList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["getAllCategories"],
    queryFn: fetchAllCategories,
  });

  if (isPending)
    return (
      <div className="h-full flex justify-center items-center">Patientez...</div>
    );

  return (
    <div>
      <h2 className="text-4xl font-bold my-5 text-cyan-700">Liste des catégories</h2>
      <DrawerCategory />
      <div className="grid grid-cols-4 gap-4">
        {data?.map((category: any) => (
          <Link key={category.id} href={`/categories/${category.id}`}>
              <Card>
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>Description de la catégorie</CardDescription>
                </CardHeader>
              </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostList;
