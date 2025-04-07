const Sidebar = () => {
  return (
    <nav className="h-full p-3 bg-black flex flex-col text-white ">
      {/*로고 영역 + 메뉴 아이템*/}
      <div className="flex-1 overflow-y-auto"></div>
      {/*  로그아웃 버튼 영역*/}
      <div>로그아웃 </div>
    </nav>
  );
};

export default Sidebar;
