import React, {useState} from "react";
import Modal from "Components/Modal/Modal.js";
import Bookmark from "Components/Common/Bookmark/Bookmark.js";
import {ProductWrapper,ImageWrapper,Image,TextWrapper,Name,Customer,Follow} from "./ItemStyles.css";


export default function Brand({items,bookmark}) {
    const [isOpen, setIsOpen] = useState(false);
    const [CurrentBookmark,SetBookmark]=useState(bookmark);

    const handleClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    
    return (
        <ProductWrapper>
            <ImageWrapper>
                <Image src={items.brand_image_url} alt={items.title} onClick={handleClick}/> 
                <Bookmark bookmark={CurrentBookmark} SetBookmark={SetBookmark} id={items.id}/>
            </ImageWrapper>
            <TextWrapper>
                <Name>{items.brand_name}</Name>
                <Customer>관심고객 수</Customer>
            </TextWrapper>
            <Follow>{items.follower}</Follow>

            {
                isOpen && (
                    <Modal
                        image={items.brand_image_url}
                        name={items.brand_name}
                        onClose={handleClose}
                        bookmark={CurrentBookmark} 
                        SetBookmark={SetBookmark}
                        id={items.id}
                        />
                )
            }
        </ProductWrapper>
    );
}
