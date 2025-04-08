import MobileMenu from "@/app/components/chat/MobileMenu";
import ModelSelect from "@/app/components/chat/ModelSelect";

const Header = () => {
  return (
    <header className="felx items-center p-2 sticky top-0 bg-white z-10">
      {/*  모바일 메뉴 영역*/}
      <MobileMenu />
      {/*선택영역*/}
      <ModelSelect />
    </header>
  );
};

export default Header;
