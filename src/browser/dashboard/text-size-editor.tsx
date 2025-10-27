import { render } from '../render';
import { DashboardThemeProvider } from './components/DashboardThemeProvider';
import { useReplicant } from '@nodecg/react-hooks';



export const LayoutTextSizeEditor = () => {

    const [gameTextSize, setGameTextSize] = useReplicant<number>('layoutGameTextSize');
    const [categoryTextSize, setCategoryTextSize] = useReplicant<number>('categoryTextSize');
    const [runnerTextSize, setRunnerTextSize] = useReplicant<number>('runnerTextSize');
    const [commentatorTextSize, setCommentatorTextSize] = useReplicant<number>('commentatorTextSize');

    const textSizes = [20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46]

    return (<DashboardThemeProvider>
        <button onClick={() => {
            setGameTextSize(36);
            setCategoryTextSize(36);
            setRunnerTextSize(28);
        }} className='bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold uppercase py-2 px-4'>Reset</button>
        <h3 className='font-bold'>Edit Game Title Size:</h3>
        <div className="inline-flex">
            {textSizes.map((size, index) =>
                <button onClick={() => {
                    setGameTextSize(size);
                }} 
                className={`${gameTextSize == size ? "bg-blue-200" : "bg-gray-300"} hover:bg-gray-400 text-gray-800 font-bold uppercase py-2 px-4 ${index == 0 ? "rounded-l" : (index == (textSizes.length - 1) ? "rounded-r" : "")}`}>
                    {size}
                </button>
            )}
        </div>
        <h3 className='font-bold'>Edit Category Title Size:</h3>
        <div className="inline-flex">
            {textSizes.map((size, index) =>
                <button onClick={() => {
                    setCategoryTextSize(size);
                }} 
                className={`${categoryTextSize == size ? "bg-blue-200" : "bg-gray-300"} hover:bg-gray-400 text-gray-800 font-bold uppercase py-2 px-4 ${index == 0 ? "rounded-l" : (index == (textSizes.length - 1) ? "rounded-r" : "")}`}>
                    {size}
                </button>
            )}
        </div>
        <h3 className='font-bold'>Edit Runner Title Size:</h3>
        <div className="inline-flex">
            {textSizes.map((size, index) =>
                <button onClick={() => {
                    setRunnerTextSize(size);
                }} 
                className={`${runnerTextSize == size ? "bg-blue-200" : "bg-gray-300"} hover:bg-gray-400 text-gray-800 font-bold uppercase py-2 px-4 ${index == 0 ? "rounded-l" : (index == (textSizes.length - 1) ? "rounded-r" : "")}`}>
                    {size}
                </button>
            )}
        </div>
    </DashboardThemeProvider>)
}

render(<LayoutTextSizeEditor />)