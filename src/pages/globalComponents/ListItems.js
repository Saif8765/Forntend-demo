import React from 'react'
import { Link, useLocation  } from 'react-router-dom'

const ListItems = (props) => {
	const loc= useLocation()

	return (
		<li>
			<button className={`w-full py-1 pl-3 border-l-4 border-white text-darkgray hover:cursor-pointer ${loc.pathname === `/${props.itemAddress}` ? 'bg-lightgray border-darkblue  bg-lightgray text-darkblue border-darkblue': ''} `}>
				<Link to={props.itemAddress} className="flex items-center w-full">
					<img
						className="w-[16px] my-1 h-[16px] mr-2"
						src="https://user-images.githubusercontent.com/34196609/187050281-b6951a81-fb6e-4318-9562-675fb45a9fd0.png"
						alt=""
					/>
					<span className="text-[14px]">{props.item}</span>
				</Link>
			</button>
		</li>
	)
}

export default ListItems
