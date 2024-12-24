import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import css from "./page.module.css";

export default function AvatarFunc() {
    return(
        <Avatar className={css['avatar-profile']}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}