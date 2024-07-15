import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

type DialogConfirmDeleteProps = {
    handleDelete: () => void;
    isPending: boolean;
}

const DialogConfirmDelete = ({ handleDelete, isPending }: DialogConfirmDeleteProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive">
                    Supprimer
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Êtes-vous sûr ?</DialogTitle>
                    <DialogDescription>
                        Action irreversible
                    </DialogDescription>
                </DialogHeader>
                <Button variant="destructive" onClick={handleDelete} disabled={isPending}>
                    Valider
                </Button>
            </DialogContent>
        </Dialog>

    );
}

export default DialogConfirmDelete;