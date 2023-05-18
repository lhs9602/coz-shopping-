import React, {useState} from "react";
import Bookmark from "Components/Common/Bookmark/Bookmark.js";
import Modal from "Components/Modal/Modal.js";
import {ProductWrapper,ImageWrapper,Image,TextWrapper,Name,Intro} from "./ItemStyles.css";



export default function Exhibition({items,bookmark}) {
    const [isOpen, setIsOpen] = useState(false);
    const [CurrentBookmark,SetBookmark]=useState(bookmark);

    const handleClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <ProductWrapper >
            <ImageWrapper>
                <Image src={items.image_url} alt={items.title} onClick={handleClick}/>
                <Bookmark bookmark={CurrentBookmark} SetBookmark={SetBookmark} id={items.id}/>
            </ImageWrapper>
            <TextWrapper>
                <Name>{items.title}</Name>
            </TextWrapper>
            <Intro>{items.sub_title}</Intro>
            {
                isOpen && (
                    <Modal
                        image={items.image_url}
                        name={items.title}
                        onClose={handleClose}
                        id={items.id}
                        bookmark={CurrentBookmark} 
                        SetBookmark={SetBookmark}/>
                )
            }
        </ProductWrapper>
    );
};
