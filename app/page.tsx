import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Home() {
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<img
				src="/bottom-art.png"
				className="fixed bottom-0 left-0 w-full"
				alt=""
			/>
			<img
				src="/ducky-peeking.png"
				className="fixed top-0 left-0 w-[7.5vw] rotate-180"
				alt=""
			/>
			<div className="flex gap-[2vw] items-center justify-center translate-y-[-7.5vh]">
				<div className="w-[35vw] gap-[2vh] rounded-[3vh]  mx-auto flex flex-col items-center justify-center">
					<h1 className="jersey text-[5vh] shadow-xl hover:shadow-2xl transition-all hover:scale-[101%] border-[1px]  border-black rounded-[3vh] w-full text-center flex gap-[1vw] items-center justify-center">
						<img
							src="/doomed-duck.png"
							className="w-[4vw] h-[4.5vw] pb-[0.5vw]"
							alt=""
						/>
						The Lost Duck...
					</h1>
					<div className="p-[2.5vh] py-[3vh] shadow-2xl border-[1px] border-black rounded-[3vh] w-full flex flex-col gap-[1.5vh]">
						<Link
							href={"https://dev-one-hack.vercel.app"}
							className="border-[1px] border-black shadow-md hover:shadow-xl transition-all hover:scale-[101%] rounded-[3vh] w-full text-center flex items-center justify-start px-[1vw] py-[1vh] gap-[1vw]"
						>
							<img
								src="/peep-blank.png"
								className="w-[2.5vw] h-auto object-cover rounded-[0.5vh] p-[0.25vh]"
								alt=""
							/>
							<p className="text-[2.5vh]">Portfolio Website</p>
						</Link>
						<Link
							href={"https://github.com/jane-does-coding"}
							className="border-[1px] border-black shadow-md hover:shadow-xl transition-all hover:scale-[101%] rounded-[3vh] w-full text-center flex items-center justify-start px-[1vw] py-[1vh] gap-[1vw]"
						>
							<FiGithub className="text-[4vh] p-[0.5vh] rounded-[0.5vh]" />

							<p className="text-[2.5vh]">Github</p>
						</Link>
						<Link
							href={"https://www.linkedin.com/in/yevheniia-simaka/"}
							className="border-[1px] border-black shadow-md hover:shadow-xl transition-all hover:scale-[101%] rounded-[3vh] w-full text-center flex items-center justify-start px-[1vw] py-[1vh] gap-[1vw]"
						>
							<FiLinkedin className="text-[4vh] p-[0.5vh] rounded-[0.5vh]" />
							<p className="text-[2.5vh]">LinkedIn</p>
						</Link>
						<Link
							href={"/"}
							className="border-[1px] border-black shadow-md hover:shadow-xl transition-all hover:scale-[101%] rounded-[3vh] w-full text-center flex items-center justify-start px-[1vw] py-[1vh] gap-[1vw]"
						>
							<img
								src="https://placehold.co/600x400"
								className="w-[5vw] h-auto object-cover rounded-[3vh]"
								alt=""
							/>
							<p className="text-[2.5vh]">More Coming Soon!</p>
						</Link>
					</div>
				</div>
				<div className="w-[30vw] gap-[2vh] rounded-[3vh] mx-auto flex flex-col items-center justify-center">
					<h1 className="jersey text-[5vh] shadow-xl hover:shadow-2xl transition-all hover:scale-[101%] border-[1px] border-black rounded-[3vh] w-full text-center">
						Featured
					</h1>
					<Link
						href={"/"}
						className="p-[3vh] shadow-xl hover:shadow-2xl transition-all hover:scale-[101%] border-[1px] border-black rounded-[3vh] w-full relative group"
					>
						<p className="bg-blue-200 px-[1vw] py-[0.5vh] rounded-full absolute top-[2vh] right-[0vh] rotate-15 w-fit font-thin border-2 border-black text-black text-[2.25vh] jersey transition-all group-hover:scale-[110%] group-hover:rotate-25 group-hover:shadow-2xl group-hover:top-[1vh] group-hover:right-[-1vw]">
							{"(Coming Soon)"}
						</p>
						<img
							src="sneaky-peak.png"
							className="w-full rounded-[2.5vh] border-[1px] border-black"
							alt=""
						/>
						<h1 className="jersey text-[5vh] w-full text-center leading-[5vh] mt-[1.5vh] mb-[0.5vh]">
							Notion Project Planner
						</h1>
						<p className="text-center text-[2vh] px-[0.5vw]">
							Notion template to help you plan and organize your programming
							projects, weather it's your first website, or B2B startup!
						</p>
						<p className="underline mt-[1vh] font-semibold mx-auto w-full text-center flex items-center justify-center gap-[0.5vw] text-[1.5vh]">
							Visit the Resource <FaLink />
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
