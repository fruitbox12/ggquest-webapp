

const RowQuest = (props : any) => {

  // TODO
  const handleClaimQuest = ()=> {
    return;

  }


  return (
      <div className="flex flex-row mt-10 rounded-lg border border-gray-200/80 p-6">
                  <div className="relative border-r-2 border-white-500">
                    <img className="w-30 h-50 rounded-md object-cover" src="/assets/quests_banner/Sandbox/quests/eight.png"
                      alt="User" />
                  </div>

                  <div className="flex flex-col px-6 ">
                    <div className="flex h-8 flex-row">
                        <h2 className="text-lg font-semibold ">{props.questTitle}</h2>
                    
                    </div>

                    <div className="my-2 flex flex-row space-x-2">
                      <div className="flex flex-row">
                      

                        <div className="text-xs text-gray-400/80 hover:text-gray-400">
                          <button
                          className="flex rounded-sm bg-[#3C2176] py-2 px-4 text-white transition-all duration-150 ease-in-out ">
                        
                            + {props.reward} XP 
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-row">
                      

                        <div className="text-xs text-gray-400/80 hover:text-gray-400">
                          <button
                          className="flex rounded-sm bg-[#054d43] py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-[#637e7c]"
                          onClick={handleClaimQuest}
                          >
                        
                            CLAIM
                          </button>
                        </div>
                      </div>

                    </div>

                
                  </div>

                </div>
  )
}

export default RowQuest;