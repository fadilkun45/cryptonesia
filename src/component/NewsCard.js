import moment from 'moment'

const NewsCard = ({title,desc,creator,url,date}) => {
    return (
        <a href={url} target="_blank" className="border-b border-black px-3 py-2 mb-4">
            <h4 className="font-bold text-blue-500 text-base lg:text-2xl">{title.length <= 150 ?  title : title.slice(0,150) + '...'    }</h4>
            <p className="text-sm text-blue-500 mt-1">{desc.length <= 300 ?  desc : desc.slice(0,300) + '...'}</p>
            <div className="flex justify-between mt-5">
            <p className="text-sm text-blue-500 items-center flex"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>{creator}</p>

            <p className="text-sm text-blue-500 items-center flex "> <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> {moment(date).format('ll')}</p>
            </div>
        </a>
    )
}

export default NewsCard
