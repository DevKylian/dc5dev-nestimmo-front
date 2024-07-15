"use client";

import DialogConfirmDelete from "@/components/globals/DialogConfirmDelete";
import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { deleteCategory, fetchCategoryById } from "@/services/category.service";

type PostDetailParams = {
  id: string;
};

const PostDetail = () => {
  const { id } = useParams<PostDetailParams>();
  const router = useRouter();
  const { toast } = useToast();
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetchCategoryById(id),
  });

  const mutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      toast({
        title: "Post supprimé",
        description: "Le post a été supprimé avec succès",
      });
      router.push("/");
    },
  });

  const handleDelete = () => {
    mutation.mutate(id);
  };

  if (isPending) {
    return (
      <div className="h-screen flex justify-center items-center text-lg font-semibold text-gray-600">
        Patientez...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{data.name}</h1>

      <DialogConfirmDelete
        handleDelete={handleDelete}
        isPending={mutation.isPending}
      />
    </div>
  );
};

export default PostDetail;
