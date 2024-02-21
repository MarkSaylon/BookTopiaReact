import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CommentCard.css'

export default function SimpleSlider({commentData}) {

    console.log('SLIDERRRR');

    var settings = {
      infinite: true,
      dots: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      initialSlide: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            initialSlide: 0
          }
        },
      ]
    };
  return (
    <Slider {...settings}>
      {commentData.map((comment) => (
        <div>
          <div className="commentContainer" key={comment.id}>
            <div className="commentBox">
              <div className="profile">
                <img className="pfp" src={comment.profile} alt="" />
                <div className="person">
                  <h3>{comment.name}</h3>
                  <h4>{comment.occupation}</h4>
                </div>
              </div>
              <div className="commentPart">
                <h4>{comment.rating}</h4>
                <p>{comment.comment}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}