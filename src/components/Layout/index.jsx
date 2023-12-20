/* eslint-disable react/jsx-key */
import layoutHeaderIcon from "../../assets/icons/layoutHeaderIcon/layoutHeaderIcon.svg";
import { getQuickMusic } from '../../services/index'
import { LayoutHeader } from "../LayoutHeader/index";
import { LayoutInput } from "../LayoutInput/index";
import { Card } from "../Card";
import { useQuery, } from "react-query";
import { useEffect, useState } from "react";
const Layout = () => {
const [musicName,setMusicName]=useState("")
    const {
      data: quickMusics,
      isLoading,
      isError,
      error,
      refetch
    } = useQuery({
      queryKey: "quickMusic",
      queryFn: async () => {
        const response = await getQuickMusic();
        return response.data.results
      },
      onError: (err) => {
        console.log("err", err);
      },
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    });
  
    // const {
    //   data: musicDatas,
    //   isLoading,
    //   isError,
    //   error,
    //   refetch
    // } = useQuery({
    //   queryKey: "musicDatas",
    //   queryFn: async () => {
    //     const response = await ()=>searchMusic();
    //     return response.data.results
    //   },
    //   onError: (err) => {
    //     console.log("err", err);
    //   },
    //   refetchInterval: false,
    //   refetchIntervalInBackground: false,
    //   refetchOnWindowFocus: false,
    // });


function handleEnter(e) {
  // console.log(e.key);
  if (e.key === "Enter") {
    console.log((musicName));
    setMusicName("")
  }
}
  function handleInputValue(e) {
    // console.log(e.target.value);
    let value=e.target.value;
    setMusicName(value)
}
    return (
      <div className="layout w-[70%] h-full p-7">
        <LayoutHeader
          
          headTitle={"Playlist"}
          description={`${quickMusics?quickMusics?.length:"..."} Playlist`}
          icon={layoutHeaderIcon}
        />
        <LayoutInput value={musicName} onKeyDown={handleEnter} onChange={handleInputValue } />

        {
          isLoading ? 
              <div aria-label="Loading..." role="status" className="flex justify-center w-full items-center mt-20 space-x-2">
                <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                    <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="24"></line>
                    <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                    </line>
                    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="24"></line>
                    <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                    </line>
                    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="24"></line>
                    <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                    </line>
                </svg>
                <span className="text-4xl font-medium text-gray-500">Loading...</span>
              </div>
          : ""
        }

        <section className={` gap-[23.04px] cardBody`}>
            {
              quickMusics?.map((musicItem) => (
                  <Card
                      {...musicItem}
                      key={musicItem.videoId} 
                  />
              ))
            }
          
        </section>
      </div>
    );
};

export default Layout;
