

function Title({name}){
  return <div className="px-2 py-2 flex flex-col items-center">
    <label style={{ color:"rgb(200,36, 113)" }} className="font-poppins_bold text-[30px] ">{name}</label>
    <div style={{ background: "rgb(208, 145, 146)" }} className="mt-2 w-[60px] h-[3px] rounded-lg"></div>
  </div>
}

export default Title;