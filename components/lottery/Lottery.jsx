import { FaTelegram } from "react-icons/fa";
import TelegramButton from "../buttons/TelegramButton";
import LotteryCard from "../cards/LotteryCard";
import Heading2 from "../headings/Heading2";
import Heading3 from "../headings/Heading3";

const Lottery = ({ ethereumClient }) => (
    <section className="mt-[70px] sm:mt-[115px] px-4 xl:px-0" id="Lottery">
        <div className="max-w-[1296px] m-auto text-center mb-8">
            <Heading2>Collections</Heading2>
            <div className="flex flex-col md:flex-row items-center gap-0 md:gap-5">
                <div className="w-full md:w-10/12 lg:w-6/12 mt-[35px] md:mt-[55px]">
                    <Heading3>Mint and Win NFT Lottery</Heading3>
                    <p className="mt-[15px]">Welcome to Mint and Win, where valuable prizes await you! With 1000 exclusive NFTs, we're giving away 100 incredible prizes. Even if you don't win, stay tuned for exciting plans involving non-winning tickets. Join us and mint your NFTs promptly. Good luck on your rewarding journey with Mint and Win!</p>
                    <p className="mt-[10px]">We eagerly anticipate your participation. Here is the list of prizes:</p>
                    <div className="flex gap-2 flex-wrap justify-center lg:justify-start rounded-[15px] bg-[#2A3246] p-[20px_15px] sm:p-[30px_20px] mt-[10px]">
                        {[
                            ["1st", "25"],
                            ["2nd", "10"],
                            ["3rd", "3"],
                            ["4th-28th", "1"],
                            ["29th-49th", "0.5"],
                            ["50th-100th", "0.32"],
                        ].map(([place, bnb], i) => (
                            <p key={i} className="border-r pr-2 last:border-0">{place} place: <span className="text-[color:var(--color-primary)]">{bnb}BNB</span></p>
                        ))}
                    </div>
                    <div className="mt-[30px] md:mt-[40px]">
                        <TelegramButton><FaTelegram className="text-[24px]" />JOIN OUR Telegram</TelegramButton>
                    </div>
                </div>
                <div className="w-1/12 hidden lg:block"></div>
                <LotteryCard ethereumClient={ethereumClient} />
            </div>
        </div>
    </section>
);

export default Lottery;