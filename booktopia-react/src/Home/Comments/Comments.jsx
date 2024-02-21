import React, {useState} from "react"
import CommentCard from './CommentCard/CommentCard.jsx'
import prof1 from './JohnDoe.jpg'
import prof2 from './JosephTurner.jpg'
import prof3 from './EmmaBurton.jpg'
import prof4 from './LeonHarrman.jpg'

function Comments(){

    const commentPlaceholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus libero eu orci facilisis convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam a pulvinar erat, nec bibendum arcu. Sed malesuada rutrum tincidunt. Morbi tincidunt diam id mi tristique fermentum. Aliquam nec purus ornare lorem.";

    const comments = [{id: 1, name:"John Doe", occupation:"Film Critic", comment: commentPlaceholder, profile: prof1, rating:"4/5 stars" },
                    {id: 2, name:"Joseph Turner", occupation:"Director", comment: commentPlaceholder, profile: prof2, rating:"3/5 stars"  },
                    {id: 3, name:"Emma Burton", occupation:"Avid Reader", comment: commentPlaceholder, profile: prof3, rating:"5/5 stars"  },
                    {id: 4, name:"Leon Harrman", occupation:"Couch Potato", comment: commentPlaceholder, profile: prof4, rating:"4/5 stars"  },]

    return(
        <>
            <CommentCard commentData = {comments}/>
        </>
    )

}

export default Comments