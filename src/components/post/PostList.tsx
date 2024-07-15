'use client'

import { fetchAllPosts } from "@/services/post.service";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import DrawerPost from "@/components/post/DrawerPost";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const PostList = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['getAllPosts'],
        queryFn: fetchAllPosts
    })

    if(isPending) return <div className="h-full flex justify-center items-center">Patientez...</div>

    return (
        <div>
            <h2 className="text-4xl font-bold my-5 text-cyan-700">
                Liste des posts
            </h2>
            <DrawerPost />
            <div className="grid grid-cols-4 gap-2">
                {data?.map((post: any) => (
                    <Link key={post.id} href={`/posts/${post.id}`}>
                        <Card >
                            <CardHeader>
                                <CardTitle>{post.title}</CardTitle>
                                <CardDescription>{post.description}</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                {post.category?.name}
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PostList;