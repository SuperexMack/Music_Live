import solanaIcon from "./llyrics.png";
export function Navbar() {
  return (
    <>
      <div className="bg-[#192A56] h-[80px] w-full flex items-center px-4 md:px-8">
        <img src={solanaIcon} className="h-[40px] md:h-[50px] rounded-lg" alt="Solana Icon" />
        <ul className="text-white flex items-center space-x-6 md:space-x-9 ml-auto mr-8 text-[18px] md:text-[25px] font-semibold">
          <li><a href="/">Home</a></li>
          <li><a href="https://github.com/SuperexMack">About</a></li>
          <li><a href="https://x.com/TSilent_Monk">Contact</a></li>
        </ul>
      </div>
    </>
  );
}
