import { useState } from "react";
import axios from "axios";

function VoiceGenerationComponent() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("21m00Tcm4TlvDq8ikWAM");
  const [loading, setLoading] = useState(false);
  const [audio, setAudio] = useState(null);

  const HandelChange = async () => {
    setLoading(true);
    try {
      const API_KEY = "sk_fc96d5698aa336e1f279f05b56e96d4fd7e80f4596fcabda";
      const response = await axios({
        method: "POST",
        url: `https://api.elevenlabs.io/v1/text-to-speech/${voice}`,
        headers: {
          "Content-Type": "VoiceGenerationComponentlication/json",
          "xi-api-key": API_KEY,
        },
        data: {
          text: text,
          voice_settings: { stability: 0.75, similarity_boost: 0.75 },
        },
        responseType: "arraybuffer",
      });
      const bolb = new Blob([response.data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(bolb);
      setAudio(audioUrl);
    } catch (err) {
      console.log("Text Not generated", err.message);
    }
    setLoading(false);
  };
  return (
    <div className='display flex flex-col gap-y-6 justify-center items-center h-screen w-full bg-slate-100'>
      <h1 className=' font-bold font-mono text-red-500'>text To Voice </h1>
      <div className='flex items-center  gap-8 '>
        <textarea
          name=''
          id=''
          placeholder='Text To voice'
          className='w-[900px]   hidden h-28 p-2 rounded-xl'
          value={text}
          onChange={(e) => setText(e.target.value)}></textarea>
      </div>
      <section className='flex gap-x-10'>
        <div>
          <select
            name=''
            id=''
            value={voice}
            onChange={(e) => setVoice(e.target.value)}>
            <option value='21m00Tcm4TlvDq8ikWAM'>khalid</option>
            <option value='21m00Tcm4'>amine</option>
          </select>
        </div>
        <button
          onClick={HandelChange}
          className={`cursor-pointer font-semibold overflow-hidden relative z-100 border border-green-500 group px-8 py-2 
            ${loading || !text ? "bg-slate-500 cursor-not-allowed" : ""}`}
          disabled={loading || !text}>
          <span className='relative z-10 text-green-500 group-hover:text-white text-xl duration-500'>
            Genarate
          </span>
          <span className='absolute w-full h-full bg-green-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500'></span>
          <span className='absolute w-full h-full bg-green-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500'></span>
        </button>
        {loading ? "Genrating..." : ""}
      </section>
      <div className='flex justify-center'>
        {audio && (
          <div className=''>
            <audio
              key={audio}
              controls
              className='w-96'>
              <source
                src={audio}
                type='audio/mpeg'
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
    </div>
  );
}

export default VoiceGenerationComponent;
