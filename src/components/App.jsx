import { useState } from "react";
import axios from "axios";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { FaUser } from "react-icons/fa";


function App() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("21m00Tcm4TlvDq8ikWAM");
  const [audio, setAudio] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateSpeech = async () => {
    setLoading(true);
    try {
      const API_KEY = "sk_fc96d5698aa336e1f279f05b56e96d4fd7e80f4596fcabda";
      const response = await axios({
        method: "POST",
        url: `https://api.elevenlabs.io/v1/text-to-speech/${voice}`,
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": API_KEY,
        },
        data: {
          text: text,
          voice_settings: { stability: 0.75, similarity_boost: 0.75 },
        },
        responseType: "arraybuffer", // Get audio data as binary
      });
      const audioBlob = new Blob([response.data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
    } catch (error) {
      console.error("Error generating speech:", error.message);
    }
    setLoading(false);
  };

  return (
    <div className='flex  ml-40 mt-20 h-screen'>
      <div className='flex flex-col gap-8'>
        <div>
          <h1 className=' text-white text-2xl font-bold flex gap-2 items-center'>
            <MdOutlineRecordVoiceOver />
            Text to speach
            <FaUser />
          </h1>
        </div>
        <div className='flex flex-col'>
          <section className='relative'>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder='Enter text to generate speech'
              rows='5'
              cols='50'
              className='p-5 shadow-xl rounded-3xl bg-transparent  focus:outline-none text-white font-bold text-lg w-[60rem]'
            />

            <select
              id='voice-select'
              value={voice}
              onChange={(e) => setVoice(e.target.value)}
              className='bg-purple-950 focus:outline-none p-3 text-white font-bold absolute left-0 transform bottom-1 rounded-3xl'>
              <option value='21m00Tcm4TlvDq8ikWAM'>
                Rachel <FaUser />
              </option>
              <option value='EXAVITQu4vr4xnSDxMaL'>Domi</option>
              <option value='ErXwobaYiN019PkySvjV'>Bella</option>
            </select>
          </section>
          <section className = "flex gap-10 items-center    ">
            <button
              onClick={handleGenerateSpeech}
              disabled={loading || !text}
              className={` bg-blue-500 font-bold text-white p-3 rounded-3xl mt-5 w-[400px]  m-auto ${
                loading || !text ? "bg-gray-500 cursor-not-allowed" : ""
              }`}>
              {loading ? "loading..." : "Generate speech"}
            </button>
            <div className='h-8'>
              {audio && (
                <div className=''>
                  <audio
                    key={audio}
                    controls
                    className='w-[400px] h-12'>
                    <source
                      src={audio}
                      type='audio/mpeg'
                    />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
