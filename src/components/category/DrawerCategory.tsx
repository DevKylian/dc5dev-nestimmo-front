'use client';

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import FormPost from "./FormPost";
import { useState } from "react";

const DrawerCategory = () => {
    const [open, setOpen] = useState(false);

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="default">
                    Ajout d'une nouvelle catégorie
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="text-center">
                        Ajouter une nouvelle catégorie
                    </DrawerTitle>
                    <DrawerDescription className="text-center">
                        Veuillez remplir tous les champs.
                    </DrawerDescription>
                </DrawerHeader>
                <FormPost setOpen={setOpen} />
                <DrawerFooter>
                    <DrawerClose>
                        <Button variant="outline">Annuler</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

export default DrawerCategory;
