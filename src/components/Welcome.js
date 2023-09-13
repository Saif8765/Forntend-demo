import React from 'react'

const Welcome = (props) => {
	return (
		<>
			<div className="text-darkblue w-full text-center">
				<div className="w-full py-[15px] flex items-center flex-col">
					<p className="text-[14px]">Welcome!</p>
					<h3 className="text-[20px]">{props.name}</h3>
				</div>
				<button className="bg-darkblue text-[18px] text-white px-[20px] rounded-md py-1">
					Create New <span className="text-[24px] font-[400]"> +</span>
				</button>
			</div>
		</>
	)
}

export default Welcome
