import { useEffect, useRef, useState } from "react"
import WaveSurfer from "wavesurfer.js"
import { Play, Pause } from "lucide-react"

const SoundComp = () => {

    const waveformRef = useRef(null)
    const wavesurfer = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        const ws = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: "#ffff",
            progressColor: "#f59e0b",
            height: 50,
            responsive: true,
        })

        ws.load("src/assets//audio/Vid.mp3")
        wavesurfer.current = ws

        ws.on("play", () => setIsPlaying(true))
        ws.on("pause", () => setIsPlaying(false))

        return () => ws.destroy()
    }, [])



    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex w-full gap-4  ">
                <button
                    onClick={() => wavesurfer.current.playPause()}
                    className="w-6 h-6 p-1 mt-5 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition"
                >
                    {isPlaying ? <Pause size={15} /> : <Play size={15} />
                    }
                </button>
                <div className="w-full flex flex-col">

                    
                    {/* // dynamically  price. */}
                    <div className="h-[64px] flex items-center w-full bg-[#5A6C5E] rounded-xl px-3">
                        <div ref={waveformRef} className="w-full"></div>
                    </div>
                    <div className="bg-transparent" >
                        <h2 className="text-[20px] font-bold my-5 ">African (My Africa)</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nesciunt hic dignissimos odio ad rem dolor quisquam, fuga quos laborum.</p>
                    </div>
                </div>

            </div>
            <div>

            </div>

        </div>
    )
}

export default SoundComp

