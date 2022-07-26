export default function LoadingState() {
  return (
    <div className="animate-pulse bg-gray-200 pb-5 mt-5">
      <div className="justify-end flex">
        <div className="bg-gray-300 w-full sm:w-96 flex justify-end h-8 rounded sm:mr-11 mb-5" />
      </div>
      <div className="bg-gray-400 w-full sm:w-96 h-8 rounded mb-4 sm:ml-11" />
      <div className="bg-gray-400 w-full sm:w-48 h-8 rounded sm:ml-11 mb-10" />
      <div className="bg-gray-400 w-full border border-gray-300 mb-5" />
      <div className="grid grid-cols-3 gap-2 px-11 mb-5">
        <div className="h-5 bg-gray-300" />
        <div className="h-5 bg-gray-300" />
        <div className="h-5 bg-gray-300" />
        <div className="h-8 bg-gray-300" />
        <div className="h-8 bg-gray-300" />
        <div className="h-8 bg-gray-300" />
        <div className="h-5 bg-gray-300 col-start-2 col-end-2" />
      </div>
      <div className="bg-gray-300 w-full border border-gray-300 mb-5" />
      <div className="bg-gray-300 xs:w-72 h-8 rounded sm:ml-11" />
    </div>
  )
}
