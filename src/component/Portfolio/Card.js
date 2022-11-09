import React, { useState } from "react";
import PopUpBox from "./PopUpBox";
import Portfolio_data from "./Portfolio_data";
import { AiOutlineClose, AiFillCloseCircle } from "react-icons/ai";

const Card = props => {
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	if (modal) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}
	return (
		<>
			<div className="box btn_shadow ">
				<div className="img">
					<img src={props.image} alt="" onClick={toggleModal} />
				</div>
				<div className="category d_flex">
					<span onClick={toggleModal}>{props.category}</span>
					<label>
						<i className="far fa-heart"></i> {props.totalLike}
					</label>
				</div>
				<div className="title">
					<h2 onClick={toggleModal}>{props.title}</h2>
					<a href="#popup" className="arrow" onClick={toggleModal}>
						<i class="fas fa-arrow-right"></i>
					</a>
				</div>
			</div>

			{/* Popup box */}
			{modal && (
				<div className="modal">
					<div onClick={toggleModal} className="overlay"></div>
					<div className="modal-content d_flex">
						{/* <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div> */}
						<div className="modal-text right">
							<span>My work</span>
							<h1>{props.title}</h1>
							<div className="content grid">
								{Portfolio_data.map((value, index) => {
									if (value.title === props.title) {
										return (
											<PopUpBox
												key={index}
												image={value.image}
												title={props.title}
												content={value.content}
											/>
										);
									}
								})}
							</div>
							{/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
              <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p> */}
							{/* <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <i class='far fa-thumbs-up'></i>
                </button>
                <button className='btn_shadow'>
                  VIEW PROJECT<i class='fas fa-chevron-right'></i>
                </button>
              </div> */}
							<button className="close-modal btn_shadow" onClick={toggleModal}>
								<AiOutlineClose size={40} />
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Card;
