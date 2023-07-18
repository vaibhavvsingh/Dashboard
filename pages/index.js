import SideBar from "@/components/SideBar";
import SideNav from "@/components/SideNav";
import TopNav from "@/components/TopNav";
import Content from "@/components/Content";
import PreviewTask from "@/components/PreviewTask";

export default function Home() {
  return (
    <div className="relative">
      <TopNav />
      <div className="flex overflow-auto">
        <SideNav />
        <SideBar />
        <Content />
      </div>
      <PreviewTask />
    </div>
  );
}
