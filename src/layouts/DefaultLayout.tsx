import Navbar from "../components/Navbar";
import { IDefaultLayoutProps } from "../types";

export default function DefaultLayout({ children }: IDefaultLayoutProps) {
    return (
        <div className="bg-primary-white">
            <Navbar />
            <div>{children}</div>
        </div>
    )
}
