'use client'

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createPost } from "@/services/post.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchAllCategories } from "@/services/category.service";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type FormPostProps = {
    setOpen: (open: boolean) => void;
};


const FormPost = ({ setOpen }: FormPostProps) => {
    const queryClient = useQueryClient();

    const { isLoading, error, data } = useQuery({
        queryKey: ['getAllCategories'],
        queryFn: fetchAllCategories,
    });

    const mutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getAllPosts'],
            });
            setOpen(false);
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const createPostDTO = {
            title: e.currentTarget.title.value,
            description: e.currentTarget.description.value,
            category: e.currentTarget.categorie.value,
        };

        mutation.mutate(createPostDTO);
    };

    if (isLoading) return <div className="h-full flex justify-center items-center">Patientez...</div>;

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-2">
                <Input
                    type="text"
                    placeholder="Titre du post"
                    name="title"
                    required={true}
                />
            </div>
            <div className="mb-2">
                <Textarea
                    placeholder="Description du post"
                    name="description"
                    required={true}
                />
            </div>
            <div className="mb-2">
                <Select name="categorie" required={true}>
                    <SelectTrigger>
                        <SelectValue placeholder="Selectionnez une catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                        {data && data.map((category: any) => (
                            <SelectItem key={category.id} value={category.id}>
                                {category.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Button type="submit" className="w-full" disabled={mutation.isLoading}>
                    {mutation.isLoading && <span className="mr-4 h-4 w-4 rounded-full bg-white animate-pulse"></span>}
                    Créer un post
                </Button>
            </div>
        </form>
    );
};

export default FormPost;
