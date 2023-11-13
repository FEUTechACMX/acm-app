"use client";
import React, { useState, useEffect } from 'react';
import { AiOutlineRight, AiOutlineUp} from 'react-icons/ai';
import GallerySlider from "../components/ProjectArticleGallerySlider"

interface ProjectArticleProps {
  groupname: string | undefined;
  thesisTitle: string | undefined;
  abstract: string | undefined;
  summary: string | undefined;
  members: string[] | undefined;
  category: string | undefined;
  posterFilePath: string | undefined;
  AVPLink: string | undefined;
}

const ProjectArticle: React.FC<ProjectArticleProps> = ({
  groupname,
  thesisTitle,
  abstract,
  summary,
  members,
  category,
  posterFilePath,
  AVPLink
}) => {
  const [isReadMore, setReadMoreState] = useState(false);
  const toggleReadMore = () => {
    setReadMoreState(!isReadMore);
  };

  return (
    <div className="flex flex-row  max-lg:flex-col max-md:flex-col max-sm:flex-col w-screen max-w-full">
      <div className="flex flex-col w-full pt-24">
        <div className="flex flex-col items-center justify-start pt-5 ">
          <div className="flex relative bg-timberwolf h-[660px] max-lg:h-[600px] max-md:h-[550px] max-sm:h-[500px] w-8/12 max-xl:w-9/12 max-lg:w-7/12 max-md:w-8/12 max-sm:w-9/12 s-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <img src={posterFilePath}></img>
            {/* <div className="absolute top-[30px] left-[-30px] h-[110px] w-[110px] rounded-full bg-yellow-300">

            </div>
            <div className="absolute top-[170px] left-[-30px] h-[110px] w-[110px] rounded-full bg-yellow-600">

            </div>
            <div className="absolute top-[80px] right-[-20px] bg-red-200 h-[250px] w-[250px] max-sm:h-[150px] max-sm:w-[150px]">
              
            </div> */}
          </div>
        </div>
        <div className="flex flex-col ml-5 mr-10 my-10">
          <div className="text-4xl max-sm:text-3xl font-bold text-end text-coral-pink pt-5">{groupname}</div>
          <div className="text-3xl max-sm:text-2xl font-bold text-end pt-5">{thesisTitle}</div>
        </div>
      </div>

      <div className="flex bg-timberwolf w-full pt-24">
        <div className="flex flex-col px-6">
          <div className="flex flex-col">
            <div className="flex flex-row"> 
              <div className="flex items-center justify-center w-full">
                <div className="text-2xl font-bold">Abstract</div>
                <hr className="w-full h-px border-0 dark:bg-gray-700 ml-7"/>
              </div>
            </div>
              { isReadMore ? (
              <div id="abstract" className="max-h-none overflow-hidden text-xl">
                  {abstract}
              </div>
              ): (
                <div id="abstract" className="max-h-20 overflow-hidden text-xl">
                  {abstract}
                </div>
              )}
            <div className="flex flex-col">
              <div className="flex flex-row justify-end w-full bg-timberwolf pb-4 relative">
                {isReadMore?
                  (<></>):
                  (<div className="w-full h-[20px] bg-timberwolf opacity-90 absolute bottom-9"/>)}
                
                <button onClick={toggleReadMore} className="flex items-center text-coral-pink font-bold cursor-pointer">
                  {isReadMore?(<>Read less</>):(<>Read more</>)}
                  <span className="ml-2">
                    {isReadMore?(<AiOutlineUp/>):(<AiOutlineRight/>)}
                  </span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-5 bg-timberwolf gap-3 place-items-stretch">
              <div className="h-[200px] bg-zinc-400 s-full">
              </div>
              <div className="h-[200px] bg-zinc-400 s-full">
              </div>
              <div className="h-[200px] bg-zinc-400 s-full">
              </div>
              <div className="h-[200px] bg-zinc-400 s-full">
              </div>
              <div className="h-[200px] bg-zinc-400 s-full">
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-timberwolf h-full">
            <div className="flex flex-row py-5"> 
                <div className="flex items-center justify-center w-full">
                <div className="text-2xl font-bold">Gallery</div>
                  <hr className="w-full h-px border-0 dark:bg-gray-700 ml-7"/>
                </div>
            </div>
            <div className="grid grid-cols-4 h-[300px] bg-timberwolf gap-10 max-sm:gap-2 mb-10">
              <div className="flex col-span-3 bg-zinc-800 s-full text-timberwolf text-3xl font-bold justify-center items-center">
                <p>AVP</p>
              </div>
              
              <GallerySlider 
                slides={
                  [
                    {link: "/kekw-kek.gif"},
                    {link: "/kekw-kek.gif"},
                    {link: "/kekw-kek.gif"}
                  ]
                }
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectArticle;
