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



const Scene16x9 = () => {
const run = useCurrentRun();
const commentators = useCommentators();
const player = run?.teams[0]?.players[0];

return(
<ThemeProvider>
    <div className="w-full h-[1080px] bg-intermission flex flex-row bg-red-950/50 ">
        <div className="w-[460px] h-full flex flex-col gap-8">
            <div>
                <img src={Logo} className="m-auto mt-10 mb-10"  />
                <div className="border-main-left w-[440px] auto-text-size-override h-[100px] p-1 bg-gray-800/90 ">
                    <AutoTextSize mode="box" minFontSizePx={18} maxFontSizePx={60}>
                        {run?.game}
                    </AutoTextSize>
                </div>
            </div>
            <div className="border-main-right w-[440px] h-[80px] auto-text-size-override mr-0 ml-auto p-2 bg-gray-800/90 ">
                <AutoTextSize mode="box" minFontSizePx={18} maxFontSizePx={60}>
                    {run?.category}
                </AutoTextSize>
            </div>
            <div className="border-main-left w-[440px] auto-text-size-override h-[80px] bg-gray-800/90 ">
                <AutoTextSize mode="box" minFontSizePx={18} maxFontSizePx={100}>
                    {run?.estimate}
                </AutoTextSize>
            </div>
            <div className="border-main-right w-[440px] auto-text-size-override mr-0 ml-auto h-[80px] bg-gray-800/90 ">
                <AutoTextSize mode="box" minFontSizePx={18} maxFontSizePx={40}>
                    <Timer />
                </AutoTextSize>
            </div>
            <div className="justify-center items-center self-center flex flex-col gap-8">
                <div className="border-main w-[300px] h-[70px] bg-gray-800/90 relative">
                    <img src={Runner} width={55} className="absolute left-[-20px] top-[-20px] "/>
                    <RunnerText twitch={player?.social.twitch} name={player?.name ?? ""} pronouns={player?.pronouns} />
                </div>
                {commentators && commentators.length > 0 &&
                    (
                    commentators.map((comm) => (
                    <div key={comm.id} className="border-main w-[280px]  h-[70px] bg-gray-800/90 relative">
                        <img src={Mic} width={60} className={`absolute left-[-30px] top-[-20px] rotate-12`}/>
                        <p className="right-1 top-0 absolute text-xs">{comm.pronouns}</p>
                        <RunnerText twitch={comm.twitch} name={comm.name} pronouns={comm.pronouns} />
                    </div>
                    ))
                    )
                    }
            </div>

        </div>
        <div className="w-[1440px] h-full flex items-center z-1">
            <div className="aspect-video bg-black w-full border-main" />
        </div>
    </div>
</ThemeProvider>
)}

render(<Scene16x9 />)