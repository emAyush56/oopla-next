import HomeSidebar from "../App/HomeSidebar";

const LayoutApp = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-[400px]">
        <HomeSidebar />
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default LayoutApp;
