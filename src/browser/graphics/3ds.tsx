import { render } from "../render";
import { ThemeProvider } from "./components/theme-provider";
import useCurrentRun from "../hooks/useCurrentRun";
import useCommentators from "../hooks/useCommentators";
import Logo from "./img/rta2026.png";
import { AutoTextSize } from "auto-text-size";
import { Timer } from "./components/timer";
import Mic from "../graphics/img/icons/mic.png";
import Runner from "../graphics/img/icons/runner.png";
import { RunnerText } from "./components/runner-text";



const Scene3DS = () => {
const run = useCurrentRun();
const commentators = useCommentators();
const player = run?.teams[0]?.players[0];
const background = run?.customData["background"] ?? "1";

return(
<ThemeProvider>
    <div className={`w-full h-[1080px] bg-${background} flex flex-col bg-red-950/30 `}>
        <div className="w-full h-[600px] flex items-center z-1 mt-5 justify-around">
            <div className="w-[935px] h-full">
                <div className="aspect-5/3 bg-black w-full border-main" />
            </div>
            <div className="w-[750px] h-full">
                <div className="aspect-4/3 bg-black w-full border-main" />
            </div>
        </div>

        <div className="w-full h-[400px] mt-3 flex flex-row justify-around">
            <div className="justify-center items-center self-center flex flex-col gap-8">
                <div className="menu-box bottom  w-[350px] auto-text-size-override h-[80px] bg-gray-800/90 relative">
                    <img src={Runner} width={70} className="absolute left-[-30px] top-[-20px] "/>
                    <RunnerText twitch={player?.social.twitch} name={player?.name ?? ""} pronouns={player?.pronouns} />
                </div>
                {commentators && commentators.length > 0 &&
                    (
                    commentators.map((comm) => (
                    <div key={comm.id} className="menu-box bottom  w-[320px]  h-[70px] bg-gray-800/90 relative">
                        <img src={Mic} width={60} className={`absolute left-[-30px] top-[-20px] rotate-12`}/>
                        <p className="right-1 top-0 absolute text-xs">{comm.pronouns}</p>
                        <RunnerText twitch={comm.twitch} name={comm.name} pronouns={comm.pronouns} />
                    </div>
                    ))
                    )
                    }
            </div>
            <img width={500} src={Logo} className="object-contain" />
            <div className="flex flex-col justify-evenly">
                <div className="menu-box bottom w-[400px] auto-text-size-override h-[100px] p-1 bg-gray-800/90 ">
                    <AutoTextSize mode="box" minFontSizePx={18} maxFontSizePx={60}>
                        {run?.game}
                    </AutoTextSize>
                </div>
                <div className="menu-box bottom w-[400px] h-[100px] auto-text-size-override mr-0 ml-auto p-2 bg-gray-800/90 ">
                    <AutoTextSize mode="box" minFontSizePx={18} maxFontSizePx={60}>
                        {run?.category}
                    </AutoTextSize>
                </div>
            </div>
            <div className="flex flex-col justify-evenly">
                <div className="menu-box bottom w-[350px] auto-text-size-override h-[100px] bg-gray-800/90 ">
                    <AutoTextSize mode="box" minFontSizePx={18} maxFontSizePx={100}>
                        {run?.estimate}
                    </AutoTextSize>
                </div>
                <div className="menu-box bottom w-[350px] auto-text-size-override mr-0 ml-auto h-[100px] bg-gray-800/90 ">
                    <AutoTextSize mode="box" minFontSizePx={18} maxFontSizePx={40}>
                        <Timer />
                    </AutoTextSize>
                </div>
            </div>
        </div>
    </div>
</ThemeProvider>
)}

render(<Scene3DS />)