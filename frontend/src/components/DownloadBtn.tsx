import {
  MdOutlineFileDownload,
  // MdOutlineFileDownloadDone,
} from "react-icons/md";

const DownloadBtn = () => {
  return (
    <div className="md:hidden block group-hover:block absolute bottom-5 right-5 border p-1 font-extrabold rounded-lg shadow-lg bg-white text-black text-xl cursor-pointer">
      <MdOutlineFileDownload />
    </div>
  );
};

export default DownloadBtn;
