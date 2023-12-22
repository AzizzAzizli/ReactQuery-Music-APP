/* eslint-disable react/jsx-key */
import layoutHeaderIcon from "../../assets/icons/layoutHeaderIcon/layoutHeaderIcon.svg";
import { getQuickMusic, searchMusic , getMusicInfo } from "../../services/index";
import { LayoutHeader } from "../LayoutHeader/index";
import { LayoutInput } from "../LayoutInput/index";
import { Card } from "../Card";
import { useQuery } from "react-query";
import { useRef, useState } from "react";
const Layout = () => {
    let inputRef = useRef();
    const [musicName, setMusicName] = useState("");
    const [videoId, setVideoId] = useState("")
    
    const handleEnter = (e) => {
      let value = inputRef.current.value;
    
      if (e.key === "Enter") {
        setMusicName(value);
        refetchMusic();
        inputRef.current.value = "";
      }
    }

    const { data: quickMusics, isLoading: quickMusicsLoading } = useQuery({
      queryKey: "quickMusic",
      queryFn: async () => {
        const response = await getQuickMusic();
        return response.data.results;
      },
      onError: (err) => {
        console.log("err", err);
      },

      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    });
    
    const { data: musicDatas, isLoading: searchLoading , refetch: refetchMusic } = useQuery({
        queryKey: ["musicDatas",musicName],
        queryFn: async () => {
            const response = await searchMusic(musicName);
            return response.data.result;
        },
        onError: (err) => {
            console.log("err", err);
        },
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
    });

    const { data: audioData, isLoading: audioLoading } = useQuery({
        queryKey: ["audioData",videoId],
        queryFn: async () => {
            const response = await getMusicInfo(videoId);
            return response;
        },
        onError: (err) => {
            console.log("err", err);
        },
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
    });
    console.log(audioData,audioLoading);

    const callBackClick = async (videoId) => {
        setVideoId(videoId)
    }

    return (
      <div className="layout w-[70%] h-full p-7">
        <LayoutHeader
          headTitle={"Playlist"}
          description={`${quickMusics ? quickMusics?.length : "..."} Playlist`}
          icon={layoutHeaderIcon}
        />

        <LayoutInput ref={inputRef} onKeyDown={handleEnter} />

        {quickMusicsLoading || searchLoading ? (
          <div
            aria-label="Loading..."
            role="status"
            className="flex justify-center w-full items-center mt-20 space-x-2"
          >
            <svg
              className="h-20 w-20 animate-spin stroke-gray-500"
              viewBox="0 0 256 256"
            >
              <line
                x1="128"
                y1="32"
                x2="128"
                y2="64"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></line>
              <line
                x1="195.9"
                y1="60.1"
                x2="173.3"
                y2="82.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></line>
              <line
                x1="224"
                y1="128"
                x2="192"
                y2="128"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></line>
              <line
                x1="195.9"
                y1="195.9"
                x2="173.3"
                y2="173.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></line>
              <line
                x1="128"
                y1="224"
                x2="128"
                y2="192"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></line>
              <line
                x1="60.1"
                y1="195.9"
                x2="82.7"
                y2="173.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></line>
              <line
                x1="32"
                y1="128"
                x2="64"
                y2="128"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></line>
              <line
                x1="60.1"
                y1="60.1"
                x2="82.7"
                y2="82.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></line>
            </svg>
            <span className="text-4xl font-medium text-gray-500">Loading...</span>
          </div>
        ) : ("")}

        <section className={`cardBody gap-[23.04px]`}>
            {
              musicDatas ? (
                musicDatas.map((musicItem) => (
                  <Card 
                      key={musicItem.videoId} 
                      cardDetail={musicItem} 
                      callBackClick={callBackClick}
                  />
                ))
              ) : ""
            }

            {
              searchLoading ? ("") : (
                quickMusics?.map((musicItem) => (
                  <Card 
                      key={musicItem.videoId} 
                      cardDetail={musicItem} 
                      callBackClick={callBackClick}
                  />
                ))
              )
            }
        </section>
      </div>
    )
};

export default Layout;