import Navbar from "../components/Navbar";
import { IDefaultLayoutProps } from "../types";

export default function DefaultLayout({ children }: IDefaultLayoutProps) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>
    )
}
